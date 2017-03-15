module.exports = (appRouterStack) => {

    const toReturn = {name: '/', children: []}
    for (let i = 0; i < appRouterStack.length; i++) {
        if (appRouterStack[i].path !== '/backend-tree') {
            if (appRouterStack[i].name === 'router' ) {
                toReturn.children.push({
                    name: appRouterStack[i].regexp.toString().slice(3,-13),
                    children: parseRoutes(appRouterStack[i].handle.stack).children
                })
            } else if (appRouterStack[i].route) {
                toReturn.children.push({
                    name: appRouterStack[i].route.path,
                    verb: Object.keys(appRouterStack[i].route.methods)[0]
                })
            }
        }

    }
    return toReturn
    //here we're hooking into the app object and filtering through all the routes for the ones that the dev explicitly added to their app
    //--> this excludes routes/middleware that automatically come with an express app instance, or uninteresting ones like static middleware
    //gets digs into any express routers used (right now only one level deep)--> might want to turn into recursive function
    // console.log('BIG ROUTE OBJ', app._router.stack)
    // const theRoutes = app._router.stack
    // const firstRoutes = app._router.stack.filter(middleware => {
    //     if (middleware.path === '/backend-tree') return false //exclude routes added in this file
    //     if (middleware.name === 'router') {// find the routers
    //         routerList.push(middleware)
    //         return false
    //     }
    //     //!! will turn the result into a boolean
    //     return !!middleware.route //see if the remaining have routes
    // })

    // //gets info from first level paths
    // const firstPaths = firstRoutes.map(getNodeInfo)


    // //get prefixes for the routers from their outer regexp key (try and find a better way to do this, maybe)
    // const prefixes = routerList.map(middleware => {
    //     if (middleware.regexp.fast_slash) {
    //         return '/'
    //     }
    //     return middleware.regexp.toString().slice(3,-13)
    // })

    // const routerPaths = routerList.map((middleware, idx)=>{
    //     const paths = middleware.handle.stack.map(getNodeInfo)
    //     return {
    //         router: prefixes[idx],
    //         paths,
    //     }
    // })

    // //join the paths into one array to send
    // //REVIEW: do we need this anymore?
    // const allPaths = firstPaths.concat(routerPaths)
}