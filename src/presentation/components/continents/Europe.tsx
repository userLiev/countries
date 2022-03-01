import clsx from "clsx";
import { FC } from "react";
import { ContinentSvgProps } from "./ContinentsTypes";

const Europe: FC<ContinentSvgProps> = ({
  active = false,
  className,
}) => {
  return (
    <svg viewBox="0 0 90 73" xmlns="http://www.w3.org/2000/svg" className={clsx('continent', className, { active })}>
      <path d="M3.00003 45.0834C4.07603 42.9664 6.06203 43.7474 6.98603 42.3334C7.74103 41.1784 7.69103 38.5894 7.20603 37.3764C5.24803 36.8684 3.62004 38.2824 3.96204 40.2944C2.02704 39.5004 -0.130958 40.6704 2.52904 42.0764C1.60804 42.6184 0.921041 43.6034 1.28104 44.7954C2.19504 44.9134 3.04303 44.6574 3.74903 44.0834" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.7499 33.333C8.87289 32.655 8.15189 33.28 7.99989 35.083C7.80489 37.394 9.30889 37.132 10.1929 38.847C12.0649 42.477 6.99789 42.68 7.45589 46.04C7.22489 46.168 7.05689 46.174 6.83789 46.346C9.07489 46.368 10.7029 45.627 12.7499 45.096C14.7499 44.577 17.6709 44.585 15.7489 42.146C15.1669 41.408 13.6659 41.336 13.0569 40.514C12.3219 39.522 12.8169 38.991 12.4999 37.833C12.2079 36.768 11.0139 32.986 9.99989 32.583" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M31.2499 20.5834C29.7419 22.7544 28.4199 25.5334 25.7499 26.3464C23.4019 27.0614 21.5529 26.2274 20.4939 29.0774C19.3439 32.1724 21.3349 33.0674 24.0559 32.8324C26.3059 32.6384 29.0799 30.4484 29.7489 33.0834C30.2139 34.9134 27.9799 37.6074 31.2499 38.0894C34.0919 38.5074 35.8189 34.3064 36.4379 32.0834C37.0229 29.9774 35.4929 27.8484 36.4399 26.3274C36.7559 25.8194 38.2639 25.3604 38.8199 24.8394C39.4519 24.2464 39.8589 22.4124 40.7989 22.1344C45.1949 20.8314 40.3139 26.6914 40.2369 27.3334C40.1329 28.1954 41.2839 30.3674 41.7499 30.5884C43.3239 31.3354 44.3339 29.6494 45.4929 29.2714C48.0929 28.4244 50.5979 31.1504 47.4989 31.7824C46.2389 32.0394 41.0579 29.5034 41.5379 33.2954C42.4479 33.3524 43.3329 33.4314 44.2119 33.6204C44.4439 34.1044 44.5619 35.0074 44.4609 35.5454C44.1489 35.5584 43.8569 35.5634 43.5419 35.5454C43.1009 34.8524 42.7259 34.1024 42.4619 33.3704C40.0349 32.9214 40.4549 35.7024 40.5429 37.2894C43.0129 38.5904 39.2299 39.0384 38.2489 39.0824C36.3539 39.1694 34.8699 39.5604 32.9989 39.5824C32.1449 39.5924 31.2399 39.2064 30.4429 39.3214C29.6739 39.4324 28.3609 40.6254 27.6929 40.5254C24.7539 40.0874 28.0129 38.0974 29.0339 37.5824C28.3359 37.2354 26.9709 37.2554 26.5499 36.5884C26.2209 36.0674 26.8429 34.3704 26.7109 33.6214C24.4389 33.1894 23.2969 35.6604 23.4929 37.5834C23.7939 40.5384 25.4169 40.1534 22.2489 41.3334C19.7759 42.2544 20.2079 43.3174 18.1869 45.0264C16.7159 46.2714 14.1399 46.5554 13.9609 49.0444C12.5289 48.9844 10.8609 44.7004 11.2109 49.2954C9.27589 49.3424 6.76089 49.4544 8.99989 51.5334C9.79489 52.2724 10.7249 51.5874 11.5059 52.5754C12.1329 53.3694 12.0029 54.3494 11.9989 55.3324C11.9859 58.5384 11.3259 57.9024 8.74889 57.3884C6.88689 57.0164 4.4269 56.5764 2.5369 56.8704C2.3469 60.6564 0.964895 64.2294 1.0369 68.0454C3.4479 68.8094 4.65989 66.4574 7.01189 66.8204C7.90289 66.9584 8.4819 68.0944 9.4939 68.1004C10.9849 68.1094 12.5239 66.4874 13.4309 65.5144C14.8479 63.9934 14.5749 62.3344 15.8049 60.8204C17.1109 59.2124 20.0019 59.8594 20.2859 57.3704C21.1989 57.3214 22.6469 57.6184 23.4989 57.2824C24.5829 56.8544 24.8909 55.3034 25.6809 55.0104C28.0319 54.1364 28.8879 56.7964 29.8109 58.3404C31.0999 60.4964 33.0449 60.1654 34.4299 61.8964C36.2759 64.2044 33.6319 65.0994 33.0379 67.0464C36.2559 67.4604 35.9189 63.8074 36.0369 61.6214C37.2429 61.8334 37.9029 62.8134 38.5039 61.5884C39.5349 59.4814 37.2119 58.8304 35.9429 58.5834C33.3939 58.0874 31.2739 58.5324 29.6859 55.8474C29.0359 54.7474 28.3939 53.5674 30.2479 53.3234C31.4969 53.1584 33.2299 55.6164 34.2609 56.2784C35.1509 56.8504 36.1999 56.9824 36.9909 57.6334C38.0549 58.5114 38.2609 59.9264 39.2839 60.8204C36.0429 64.7144 43.0759 68.2324 46.2039 68.0404C46.4219 67.3654 46.8109 66.6654 46.9679 66.2914C46.4909 65.1164 43.6339 63.5894 44.2869 62.0794C44.6739 61.1844 48.5989 60.9914 49.3059 60.5914C50.6009 59.8544 52.3419 58.3744 52.7479 57.0844C53.3539 55.1544 52.0649 53.0324 55.2539 53.3224C57.0079 53.4824 57.6479 55.7424 59.0479 56.0344C60.4439 56.3254 60.5369 54.9814 61.2979 54.8714C62.6089 54.6814 63.0879 55.1544 64.1929 55.6404C68.6659 57.6044 73.5679 57.3114 78.2059 58.5524C78.3349 57.2184 77.0159 56.8394 76.9939 55.5844C76.9729 54.3864 77.8319 53.6654 78.5349 52.8214C76.9899 51.5634 74.9859 50.5104 75.0009 48.3344C75.0199 45.7284 77.6519 44.3914 80.0139 44.5844C82.3539 44.7754 83.9849 46.9784 86.0059 44.8904C87.9929 42.8394 86.1709 40.9044 86.2509 38.5844C86.3709 35.1054 87.1369 34.1444 85.4939 30.6464C84.2609 28.0214 82.8009 25.8174 84.4999 23.3834C85.2749 22.2734 89.8119 19.4754 89.0179 17.8214C88.3599 16.4494 84.0569 17.1254 82.7499 16.7784C80.9409 16.2974 79.8499 15.7744 77.7829 15.8714C77.9619 16.6604 78.3399 17.1364 79.2109 17.3754C78.9619 19.8994 74.0549 17.1664 72.2999 17.6334C70.0239 18.2394 67.8219 21.3254 65.7879 21.8014C65.5599 20.7684 66.1349 19.8114 66.6569 19.0224C66.1739 18.5114 64.1309 17.3774 63.5379 18.3164C62.7999 19.4834 65.1129 19.6764 64.9619 21.0464C62.4629 21.0924 61.2449 21.5724 59.0249 22.6464C59.7529 23.1514 59.9479 23.8604 60.2109 24.5464C58.9199 24.5234 58.8889 22.2684 57.5509 22.8844C56.6559 23.2974 57.0139 25.1844 57.2109 25.7964C55.2019 25.9814 54.9599 22.6594 53.7699 21.3834C55.4419 21.2664 58.1699 21.9364 59.7499 21.3324C62.0609 20.4494 61.3749 18.7504 59.2499 17.6524C56.4379 16.2004 53.0069 16.9264 49.9999 16.1524C46.5769 15.2714 43.5659 14.6364 39.9319 15.5144C37.1799 16.1784 32.6879 17.0004 30.4639 18.5694C31.0209 19.2494 31.9969 19.2114 32.9719 19.1204C32.4569 20.5724 30.5309 20.6604 29.4999 21.7654C28.4379 22.9044 28.8649 24.2234 27.7499 25.3334" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M25.4999 60.083C24.1879 61.055 24.1469 65.228 26.7239 64.488C27.0319 63.131 26.5319 61.664 24.9999 61.583" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M48.7496 70.333C47.3536 70.423 45.9656 69.661 44.7656 70.07C45.7246 71.027 49.1796 71.935 50.4936 70.888C49.0566 70.77 47.8346 69.905 47.2516 68.582" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M74.7496 15.333C73.3766 15.663 70.1476 15.912 69.7316 13.846C69.3016 11.719 71.9946 11.637 73.1926 10.534C73.8136 9.96202 73.7036 9.13102 74.5556 8.51602C75.4486 7.87202 77.0226 7.74602 78.0616 7.57802C79.6986 7.31302 82.1126 6.59402 83.7336 6.87102C81.3466 9.86302 75.6436 8.70902 73.4426 12.07C72.3686 13.711 73.5186 16.194 72.7496 17.334" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M34.7498 3.58294C32.8498 3.58294 30.9227 3.52394 29.0377 3.62094C28.6097 5.60694 31.0818 10.6729 33.8238 9.10694C35.2688 8.28194 34.5248 5.45093 36.7508 5.32793C38.5628 5.22793 38.0757 6.88493 39.7127 7.23993C39.9707 5.34493 37.5478 5.69094 37.0348 4.37094C38.3828 4.30594 41.0788 4.95094 41.2238 3.12094C38.2518 2.95894 34.3757 2.76294 31.7487 3.58294" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M61.75 2.58251C61.299 2.08151 59.544 1.60751 59.482 2.82551C59.402 4.43151 62.5829 3.37051 63.0409 2.57751C62.5119 2.02751 61.646 1.88051 60.75 2.08251" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M71.5003 1.58337C69.4683 1.48337 67.3673 0.84537 65.6973 2.32637C68.2463 4.95637 71.5623 2.24437 74.1913 2.08437C72.6183 2.07437 71.0603 1.87837 69.5333 1.87137C69.6073 2.28337 69.6683 2.40537 69.9203 2.81337C69.1323 2.55837 69.4273 2.18537 69.2503 1.58337" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M68.2503 17.083C67.8693 17.17 67.6043 17.145 67.2793 17.384C67.5583 18.631 69.2453 18.975 70.4843 18.796C70.2183 18.097 69.6933 17.828 69.0003 17.584" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default Europe;
