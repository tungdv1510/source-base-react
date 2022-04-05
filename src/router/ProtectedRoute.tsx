import { Suspense } from "react"
import { Switch } from "react-router-dom"
import TheLoadingSpinner from "../components/common/loading"

const ProtectedRoute = () => {
  return (
    <Suspense fallback={<TheLoadingSpinner isLoading={true} />}>
      <Switch>
        {/* <Route /> */}

        {/* <Redirect to={routes.HOMEPAGE} /> */}
      </Switch>
    </Suspense>
  )
}

export default ProtectedRoute
