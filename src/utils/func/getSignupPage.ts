interface GetSignupPageParams {
  array: string[];
  target: string;
}

const getSignupPage = ({ array, target }: GetSignupPageParams) => {
  return array.includes(target) ? "1" : "2";
};

export default getSignupPage;
