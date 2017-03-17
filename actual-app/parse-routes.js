const parseRoutes = (appRouterStack, path) => {

    const routesObj = {name: path || '/', children: []}

    //go through the stack
    appRouterStack.forEach(element => {
        //ignore the backend-tree paths we have added
        if (element.path !== '/backend-tree') {
            //if the element is a router recursive parse the route
            if (element.name === 'router' ) { 
                routesObj.children.push(parseRoutes(element.handle.stack, element.regexp.toString().slice(3,-13)))
            } else if (element.route) {
                //if normal route, just add it here
                routesObj.children.push({
                    name: element.route.path,
                    verb: Object.keys(element.route.methods)[0]
                })
            }
        }
    })

    return routesObj
}

module.exports = parseRoutes;