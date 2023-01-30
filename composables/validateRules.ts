export const usePasswordRule = (value: string) => {
  // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm
  return regex.test(value)
}
