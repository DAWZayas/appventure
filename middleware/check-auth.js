import { isAuthenticated } from '~/utils/utils'

export default function ({ redirect }) {
  if (!isAuthenticated()) {
    return redirect('/login')
  } else {
    return redirect('/appventure')
  }
}
