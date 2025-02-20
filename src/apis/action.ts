"use server";

export const createUser = async (formData: FormData) => {
  console.log(formData.get("password"));
};
