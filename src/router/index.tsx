import { lazy, Suspense, useEffect, useState } from "react"
import { Redirect, Route, Switch, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { getAccessToken } from "../utils/authentication"
import { routes } from "./constants"
import { selectIsLoading } from "../store/loading/slice"
import { useToasts } from "react-toast-notifications"
import { getMessageType } from "../utils/getMessages"
import { clearMessage, selectToastMessage } from "../store/toastMessages/slice"
import TheLoadingSpinner from "../components/common/loading"
import Layout from "../layout"
import ProtectedRoute from "./ProtectedRoute"
import { scrollTop } from "../utils/util"

const Homepage = lazy(() => import("../containers/Homepage"))
const Login = lazy(() => import("../containers/auth/Login"))

const Routes = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { addToast } = useToasts()

  const [accessToken, setAccessToken] = useState<string>()

  const isLoading = useSelector(selectIsLoading)
  const toastMessage = useSelector(selectToastMessage)

  useEffect(() => {
    setAccessToken(getAccessToken() || "")
  }, [getAccessToken()])

  useEffect(() => {
    if (toastMessage.message && toastMessage.statusCode) {
      addToast(toastMessage.message, {
        appearance: getMessageType(toastMessage.statusCode),
      })

      // clear current message
      dispatch(clearMessage())
    }
  }, [toastMessage])

  useEffect(() => {
    // scroll top when change route
    scrollTop()
  }, [location.pathname])

  return (
    <Suspense fallback={<TheLoadingSpinner isLoading={true} />}>
      <TheLoadingSpinner isLoading={isLoading} />
      <Layout>
        <Switch>
          <Route path={routes.HOMEPAGE} component={Homepage} exact />

          {/* check authentication */}
          {accessToken ? (
            <ProtectedRoute />
          ) : (
            <Route path={routes.LOGIN} component={Login} />
          )}

          <Redirect to={routes.HOMEPAGE} />
        </Switch>
      </Layout>
    </Suspense>
  )
}

export default Routes
