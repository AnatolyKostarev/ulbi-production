export interface User {
  id: string
  username: string
}

// интерфейс для стейта

export interface UserSchema {
  authDate?: User
}
