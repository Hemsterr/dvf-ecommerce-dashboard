export const LOCAL_STORAGE_KEYS = {
  USER: 'user',
}

export default class LocalStorage {
  // Get user from localStorage
  getUser = () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.USER)) || {}

  // Set user in localStorage
  setUser = data => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.USER, JSON.stringify(data))
  }

  // Update user from localStorage
  updateUser = data => {
    const user = this.getUser()
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.USER,
      JSON.stringify({ ...user, ...data })
    )
  }

  // Remove user from localStorage
  removeUser = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.USER)
  }
}
