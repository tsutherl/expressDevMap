import React from 'react'
import * as d3 from "d3"

import TestModalContainer from './TestModalContainer';


export default class Tree extends React.Component {
  constructor(props){
    super(props);   
  }

  componentDidMount(){

    const endRouteHandleClick = (node) => {
      //console.log("node", typeof node)
      let testRoute = getRoute(node);
      let verb = getVerb(node);
      //console.log("got verb", verb)
      //console.log("testroute", testRoute)
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
      g.selectAll('circle')
        .attr('r', 7.5)//reset circle size
        .style('stroke-width', 1)
        .style("stroke-opacity", 0.4)
      g.selectAll('text')
        .attr("x", function(d) { return d.children ?  -10 : 10});//reset text position
      g.selectAll('path')
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
        .attr('x', function(d) { return d.children ?  -17.5 : 17.5})
    }

    //want to refactor this to take better advantage of d3
    const alterPath = (e) => {
      let pathEnds = [];
      const paths = g.selectAll('.link')._groups[0]
      while (e.parent) {
        pathEnds.push(`${e.y},${e.x}`)
        e = e.parent
      }
      paths.forEach(path => {
        const info = path.getAttribute('d')
        const cPlace = info.indexOf('C');
        if (pathEnds.indexOf(info.slice(1,cPlace)) > -1){
          path.setAttribute('class', 'link selected')
        }
      })
      g.selectAll('.link.selected')
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
    var nodes = d3.hierarchy(this.props.routes, function(d) {
        return d.children;
      });

    // maps the node data to the tree layout
    nodes = treemap(nodes);

    // append the svg object to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3.select(this.refs.routeMap).append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .attr('id', 'tree'),
        g = svg.append("g")
          .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

    // adds the links between the nodes
    var link = g.selectAll(".link")
        .data( nodes.descendants().slice(1))
      .enter().append("path")
        .attr("class", "link")
        .style("stroke", "black")     // question: can these style things be combined?
        .style("fill", "none")         // they are style attributes for the drawn links
        .style("stroke-opacity", 0.4)   // got rid of the fill and color along the link curve
        .style("stroke-width", 1.5)  
        .attr("d", function(d) {
          return "M" + d.y + "," + d.x
            + "C" + (d.y + d.parent.y) / 2 + "," + d.x
            + " " + (d.y + d.parent.y) / 2 + "," + d.parent.x
            + " " + d.parent.y + "," + d.parent.x;
          });

    // adds each node as a group
    var node = g.selectAll(".node")
        .data(nodes.descendants())
      .enter().append("g")
        .attr("class", function(d) { 
          return "node" + 
            (d.children ? " node--internal" : " node--leaf"); })
        .attr("transform", function(d) { 
          return "translate(" + d.y + "," + d.x + ")"; });

    // adds symbols as nodes
    node.append("circle")  // made all nodes circles instead of random shapes
      .style("stroke", "black") // change node outline to black
      .style('stroke-opacity', .4)
      .attr("r", 7.5)  // above line fills node blue if it has child nodes, otherwise gray
      .attr('class', (d) => (d.data.verb ? d.data.verb : 'router'))
      .on("click", function (e) {
        resetTree();
        if (e.children) {
          routerHandleClick(e);
        } else {
          endRouteHandleClick(e); // modal functionality
        }
        alterNode(this);
        alterPath(e);
      });

    // adds the text to the node
    node.append("text")
      .attr("dy", 5) // move 3 px down for text location (I think)
      .attr("x", function(d) { return d.children ? 
        -10 : 10}) // place text label on left if node has children, otherwise on right
      .style("text-anchor", function(d) { 
        return d.children ? "end" : "start"; }) 
      .text(function(d) { return d.children? `${d.data.name}` : `${d.data.name} [${d.data.verb}]`; });  // 'name' is key on routes object
}                                              

  render() {
  
    return(
      <div ref="routeMap">
        {this.props.showModal ? <TestModalContainer/> : null}
      </div>
    )
  }
}





















