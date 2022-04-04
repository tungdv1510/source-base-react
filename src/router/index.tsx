import { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import { routes } from "./constants"

const Homepage = lazy(() => import("../containers/Homepage"))

const Routes = () => {
  return (
    <Suspense fallback>
      <Switch>
        <Route path={routes.HOMEPAGE} component={Homepage} exact />
      </Switch>
    </Suspense>
  )
}

export default Routes
