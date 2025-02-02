const getInputFieldOptions = (value: string, isBlind: boolean) => {
  const type = value.includes("password") && isBlind ? "password" : "text";
  const autoComplete =
    value === "email" || value === "nickname"
      ? "username"
      : value.includes("password")
        ? "new-password"
        : null;
  return autoComplete ? { type, autoComplete } : { type };
};

export default getInputFieldOptions;
