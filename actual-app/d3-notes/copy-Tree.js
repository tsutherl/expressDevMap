import React from 'react'
import * as d3 from "d3"

//D3 notes: the D3 code commented on here renders that initial kinda ugly tree we used - the one with ribbon like branches 
export default class Tree extends React.Component {
  constructor(props){
    super(props);
      
        
  }

  componentDidMount(){
    
    // set the dimensions and margins of the diagram
    var margin = {top: 20, right: 90, bottom: 30, left: 90},
        width = 660 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;


    // in d3, tree is actually a subcategory of d3.hierarchy, which is declared below
    
    // declares a tree layout and assigns the size (of layout)
    // there is also a way to set tree.nodeSize -- which may be useful if we want to label them?
    var treemap = d3.tree()
        .size([height, width]);





    //  assigns the data to a hierarchy using parent-child relationships
    // the hierarchy returns the root node 
    // all indiv nodes now have properties 
    // (see https://github.com/d3/d3-hierarchy/blob/master/README.md#hierarchy)
    // including node.data (as specified in constructor -- I guess 'data' could be a key on your
    // JSON objects passed in?), node.parent, node.children (and more!)

    // there are also node methods to return ancestors, leaves, etc. (same url), various
    // value evalution methods, etc.
    // ALSO:  node.path(target)  => returns shortest path from node to target (= target node) --
    // seems like this could be useful for showing server request path eventually!

        var nodes = d3.hierarchy(this.props.routes, function(d) {
        return d.children;
      });








    // maps the node data to the tree layout -- passes in the root node found by hierarchy
    // with associated structure of various generations of child nodes

    // doing this also assigns a node.x and node.y value to each node -- 'x and y represent an 
    // arbitrary coordinate system; for example, you can treat x as an angle and y as a radius 
    // to produce a radial layout' 

    nodes = treemap(nodes);





    // append an svg object to the body of the page -- we will probably want to be more
    // precise than just slapping it on doc.body!
    // all the .attr (attribute) things you can assign to svgs and the strings that 
    // name them can be found on MDN

    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin


  //"The <g> SVG element is a container used to group other SVG elements. Transformations applied 
  //to the <g> element are performed on all of its child elements, and any of its attributes are 
  //inherited by its child elements. It can also group multiple elements to be referenced later 
  // with the <use> element" (from MDN)
    var svg = d3.select("body").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom),
        g = svg.append("g")                                         
          .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

     // transform is an svg attribute (see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform)
     // that defines a list of transformations to applyto the element.
     // translate is a kind of transform, in this case it is offsetting the "g" element by
     // the distance of the margins (translate takes x value and y value for how much to offset 
     // those coordinates by.  In an svg, x coords work as we'd expect but y coords start at 0 at
     // the TOP of the svg element and grow as you move toward the bottom of the element.)
 


    // adds the links between the nodes - selects all of class link; initially none; adds them below
    var link = g.selectAll(".link") //the 'slice' returns all descendents of root node as array and
        .data( nodes.descendants().slice(1)) // .data joins array of node descendents to selection
      .enter().append("path")  // adds path element for all nodes 2nd gen & beyond 
        .attr("class", "link") // assigns class link to appended paths
        .style("stroke", function(d) { return d.data.level; }) // differentiates stroke appearance
        .attr("d", function(d) {       // d is an svg attribute which contains path instructions
          return "M" + d.y + "," + d.x // moves drawing tool to current position
            + "C" + (d.y + d.parent.y) / 2 + "," + d.x // draws cubic bezier curve between current
            + " " + (d.y + d.parent.y) / 2 + "," + d.parent.x        // node and its parent
            + " " + d.parent.y + "," + d.parent.x;
          });

    // adds each node as a group (vs adding in the link drawings above)
    var node = g.selectAll(".node")
        .data(nodes.descendants())  // adds all nodes, starting w root, to selection as data
      .enter().append("g")  // for each node, adds an svg group element "g"
        .attr("class", function(d) {  // this function adds a class of internal or leaf node 
          return "node" +             // based on whether or not the node has child nodes
            (d.children ? " node--internal" : " node--leaf"); })
        .attr("transform", function(d) {  // transform-translate moves location of node to its
          return "translate(" + d.y + "," + d.x + ")"; });  // x and y coords (defined by tree  
                                                            // layout above, I think)

    // adds symbols as nodes
    node.append("path")
      .style("stroke", function(d) { return d.data.type; })  // type, fill keys on node objects
      .style("fill", function(d) { return d.data.level; })   // define colors for node pic
      .attr("d", d3.symbol()
        .size(function(d) { return d.data.value * 30; } )    // size of node 
        .type(function(d) { if                               // use different symbols to draw
          (d.data.value >= 9) { return d3.symbolCross; } else if  // nodes based on value (key)
          (d.data.value <= 9) { return d3.symbolDiamond;}
        }));
      
    // adds the text to the node
    node.append("text")
      .attr("dy", ".35em")  // placement of text
      .attr("x", function(d) { return d.children ? // changes placement of text based on 
        (d.data.value + 4) * -1 : d.data.value + 4 })  // presence/absence of child nodes
      .style("text-anchor", function(d) { 
        return d.children ? "end" : "start"; })
      .text(function(d) { return d.data.name; });
  }

  render() {
  
    return(
      <div>
      </div>
    )
  }
}