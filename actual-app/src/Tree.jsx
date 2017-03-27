import React from 'react'
import * as d3 from "d3"

import ModalContainer from './ModalContainer';


export default class Tree extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){

    const endRouteHandleClick = (node) => {
      let testRoute = getRoute(node);
      let verb = getVerb(node);
      this.props.setRouteVerb(verb);
      this.props.setTestRoute(testRoute);
      this.props.setTestNode(node);
      if (!this.props.showModal) this.props.showModalNow();
    }

    const routerHandleClick = (node) => {
      if (this.props.showModal) this.props.hideModal();
    }

    const getRoute = (node) => {
      const routeSteps = [];
      let current = node;
      while (current.parent){
        routeSteps.unshift(current.data.name);
        current = current.parent;
        }
      return routeSteps.join("");
    }

    const getVerb = (node) => {
      return node.data.verb;
    }

    const resetTree = () => {
      d3.selectAll('circle')
        .attr('r', 7.5)//reset circle size
        .style('stroke-width', 1)
        .style("stroke-opacity", 0.4)
      d3.selectAll('text')
        .attr("x", function(d) { 
          console.log(d)
          return d.height > 0 ?  -10 : 10});//reset text position
      d3.selectAll('path')
        .attr('class', 'link')
        .style("stroke-opacity", 0.4)
        .style("stroke-width", 1.5);
    }

    const alterNode = (node) => {
      d3.select(node)
        .attr('r', 15)
        .style('stroke-width', 1.5)
        .style('stroke-opacity', 0.8)
      d3.select(node.nextSibling)
        .attr('x', function(d) { return d.height > 0 ?  -17.5 : 17.5})
    }

    //want to refactor this to take better advantage of d3
    const alterPath = (e) => {
      let pathEnds = [];
      const paths = d3.selectAll('.link')._groups[0]
      while (e.parent) {
        pathEnds.push(`${e.y},${e.x}`)
        e = e.parent
      }
      paths.forEach(path => {
        const info = path.getAttribute('d').split(' ');
        const startString = `${info[1]},${info[2]}`;
        if (pathEnds.indexOf(startString.slice(0, -1)) > -1){
          path.setAttribute('class', 'link selected')
        }
      })
      d3.selectAll('.link.selected')
        .style('stroke-opacity', 0.8)
        .style('stroke-width', 3)
    }



    
    // set the dimensions and margins of the diagram
    var margin = {top: 20, right: 110, bottom: 30, left: 90},
        width = 660 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    // declares a tree layout and assigns the size
    var treemap = d3.tree()
        .size([height, width]);





    //  assigns the data to a hierarchy using parent-child relationships
    var root = d3.hierarchy(this.props.routes, function(d) {
        return d.children;
      });
    root.x0 = height/2;
    root.y0 = 0;

    // // Collapse after the second level
    // root.children.forEach(collapse);

    // update(root);

    // // Collapse the node and all it's children
    // function collapse(d) {
    //   if(d.children) {
    //     d._children = d.children
    //     d._children.forEach(collapse)
    //     d.children = null
    //   }
    // }



    // maps the node data to the tree layout
   

    //scaleExtent take an array which holds the min scale factor at idx 0 and max scale factor at idx 1
    //event listener will be ignored if the graph is for whatever reason outside of the set scaleExtent

    //zoom ~=zoomListener
    const zoom = d3.zoom()
      .scaleExtent([1 / 2, 4])
      .on("zoom", () => {
        console.log('ZOOMING')
        // var transform = ransform(this);
        // d3.select("#tree").attr("transform", "translate(" + transform.x + "," + transform.y + ")scale(" + transform.k + ")");
        // d3.select('g')
        //   .attr('transform', 'translate(' + d3.event.transform.x + ',' + d3.event.transform.y + ') scale(' + d3.event.transform.k + ')');

        
        d3.select("#tree").attr("transform", d3.event.transform);
    });

      // console.log("zoom scale", zoom.scale)
    // append the svg object to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3.select(this.refs.routeMap).append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .attr('id', 'tree')

    var zoomer = svg.append("rect")
          .attr("width", width)
          .attr("height", height)
          .style("fill", "none")
          .style("pointer-events", "all")
          .call(zoom)

    var g = svg.append("g")

    zoomer.call(zoom.transform, d3.zoomIdentity.translate(150, 0))
    //g~= svgGroup
    //svg ~= baseSvg


    //on zoom event our zooming function is called
    //zoom and panning target our g element which is a child of our svg element
    
  //zooming ~= zoom
    const zooming = () => {
      console.log('ZOOMING')
      var transform = d3zoomTransform(this);
      d3.select("#tree").attr("transform", "translate(" + transform.x + "," + transform.y + ")scale(" + transform.k + ")");
      // d3.select(this.refs.routeMap).select('svg').select('g')
      //   .attr('transform', 'translate(' + d3.event.transform.x + ',' + d3.event.transform.y + ') scale(' + d3.event.transform.k + ')');

      
      // g.attr("transform", d3.event.transform);
    }


      // Function to center node when clicked/dropped so node doesn't get lost when collapsing/moving with large amount of children.

    // function centerNode(source) {
    //     var scale = zoom.scale();
    //     var x = -source.y0;
    //     var y = -source.x0;
    //     x = x * scale + viewerWidth / 2;
    //     y = y * scale + viewerHeight / 2;
    //     d3.select('g').transition()
    //         .duration(500)
    //         .attr("transform", "translate(" + x + "," + y + ")scale(" + scale + ")");
    //     zoom.scale(scale);
    //     zoom.translate([x, y]);
    // }


    //this is causing the tree to jump at the start of panning - removing for now
        // .attr("transform",
        //         "translate(" + margin.left + "," + margin.top + ")");
  

 

var i = 0;

//working on collapsing nodes: -----------------------
  function update(source) {
     var treeData = treemap(root);

     var nodes = treeData.descendants();

    nodes.forEach(function(d){
      return d.y = d.depth * 180;
    })

    // adds each node as a group
    var node = svg.selectAll("g.node")
        .data(nodes, function(d){
          return d.id || (d.id = i++);
        })

    var nodeEnter = node.enter().append("g")
        .attr("class", function(d) { 
          return "node" + 
            (d.height > 0 ? " node--internal" : " node--leaf"); })
        .attr('class', 'node')
        .attr("transform", function(d) { 
          return "translate(" + source.y0 + "," + source.x0 + ")"; })
        .on('click', click);

    // adds symbols as nodes
    nodeEnter.append("circle")
      .attr('class', 'node')  // made all nodes circles instead of random shapes
      .style("stroke", "black") // change node outline to black
      .style('stroke-opacity', .4)
      .attr("r", 7.5)  // above line fills node blue if it has child nodes, otherwise gray
      .attr('class', (d) => (d.data.verb ? d.data.verb : 'router'))
      .on("click", function (e) {
        resetTree();
        if (e.height > 0) {
          routerHandleClick(e);
        } else {
          endRouteHandleClick(e); // modal functionality
        }
        alterNode(this);
        alterPath(e);
      });

    // adds the text to the node
    nodeEnter.append("text")
      .attr("dy", 5) // move 3 px down for text location (I think)
      .attr("x", function(d) { return d.height > 0 ? 
        -13 : 13}) // place text label on left if node has children, otherwise on right
      .style("text-anchor", function(d) { 
        return d.height > 0 ? "end" : "start"; }) 
      .text(function(d) { return d.height > 0 ? `${d.data.name}` : `${d.data.name} [${d.data.verb}]`; });  // 'name' is key on routes object       


    var nodeUpdate = nodeEnter.merge(node);

    nodeUpdate.transition()
      .duration(500)
      .attr("transform", function(d) {
        return "translate(" + d.y + "," + d.x + ")";
      })

       // Update the node attributes and style
    // nodeUpdate.select('circle.node')
    //   .attr('r', 10)
    //   .style("fill", function(d) {
    //       return d._children ? "lightsteelblue" : "#fff";
    //   })
    //   .attr('cursor', 'pointer');
    
    var nodeExit = node.exit().transition()
      .duration(500)
      .attr("transform", function(d){
        return "translate(" + source.y + "," + source.x + ")"
      })
      .remove();
    
    nodeExit.select('circle')
      .attr('r', 1e-6)
    
    nodeExit.select("text")
      .style('fill-opacity', 1e-6);

//*********************links section */

     var links = treeData.descendants().slice(1);

    // adds the links between the nodes
    var link = svg.selectAll("path.link")
        .data(links, function(d){
          return d.id;
        })
    
    var linkEnter = link.enter().insert("path", "g")
        .attr("class", "link")
        .style("stroke", "black")     // question: can these style things be combined?
        .style("fill", "none")         // they are style attributes for the drawn links
        .style("stroke-opacity", 0.4)   // got rid of the fill and color along the link curve
        .style("stroke-width", 1.5)  
        .attr("d", function(d) {
          var o = {x: source.x0, y: source.y0};
          return diagonal(o,o);  
        });

    //keeps track of what is being re-rendered to ensure nothing is duplicated
    var linkUpdate = linkEnter.merge(link);

    linkUpdate.transition()
      .duration(500)
      .attr('d', function(d){
        return diagonal(d, d.parent);
      })
    
    var linkExit = link.exit().transition()
      .duration(500)
      .attr('d', function(d){
        var o = { x: source.x, y: source.y};
        return diagonal(o,o);
      })
      .remove(); 

//********** end links section */
    
     nodes.forEach(function(d){
        d.x0 = d.x;
        d.y0 = d.y;
    });

    function diagonal(s,d){
      var path = `M ${s.y} ${s.x}
              C ${(s.y + d.y) / 2} ${s.x},
                ${(s.y + d.y) / 2} ${d.x},
                ${d.y} ${d.x}`
      return path;
    }

    function click(d) {
      console.log('in on click')
      if (d.children) {
          d._children = d.children;
          d.children = null;
        } else {
          d.children = d._children;
          d._children = null;
        }
      update(d);
    }

}


  update(root);
  // centerNode(root);

  console.log('SVG', svg)


}                                              

  render() {
    return(
      <div id="routeMap" ref="routeMap">
        {this.props.showModal ? <ModalContainer/> : null}
      </div>
    )
  }
}





















