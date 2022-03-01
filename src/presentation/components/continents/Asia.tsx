import clsx from "clsx";
import { FC } from "react";
import { ContinentSvgProps } from "./ContinentsTypes";

const Asia: FC<ContinentSvgProps> = ({
  active = false,
  className,
}) => {
  return (
    <svg viewBox="0 0 180 140" xmlns="http://www.w3.org/2000/svg" className={clsx('continent', className, { active })}>
      <path d="M21.5001 58.0829C21.2101 57.4219 20.9141 56.8759 20.7381 56.1599C21.5751 58.0979 22.5511 59.2719 20.5061 60.0829C19.2031 60.5999 16.1271 60.0509 14.9321 59.6509C12.5181 58.8419 11.7701 57.8779 8.99411 58.8959C7.89811 59.2979 6.93511 60.3229 5.74511 60.5329C4.93311 60.6759 3.92611 60.1599 3.25011 60.3289C-0.765889 61.3309 1.89311 68.1139 5.49411 68.3339C7.55811 68.4599 8.78112 66.8779 10.7641 67.3219C12.5631 67.7249 12.8051 69.8329 15.0051 68.1099C15.7771 70.0029 14.6391 72.8759 14.2641 74.8399C13.7091 77.7439 13.4031 78.3309 15.1241 80.8339C16.6871 83.1079 17.7701 85.4209 19.5001 87.5839C21.4981 90.0839 22.0981 93.3959 23.9991 96.0899C25.3071 97.9409 27.3661 99.6489 28.1871 101.89C28.8821 103.792 28.3121 106.439 30.5421 107.339C33.1461 108.39 36.1941 105.751 38.3061 104.773C41.2731 103.397 43.0771 102.474 44.9861 99.8899C46.7691 97.4759 51.5111 95.6509 50.7501 92.1349C50.4101 90.5679 49.1761 90.6029 48.2571 89.2839C47.3391 87.9659 47.5591 86.5049 47.4621 84.8709C44.6881 84.2279 43.5241 88.3439 40.0381 87.7959C40.3511 86.2129 38.7731 83.1349 37.0011 84.5569C36.2321 83.3929 33.7971 78.5079 36.5001 78.3109C37.9471 78.2059 40.0201 81.6869 41.0001 82.5279C43.1041 84.3289 43.5121 82.7999 45.5071 83.3169C46.8721 83.6709 48.7661 86.2739 50.1951 87.0699C51.8691 88.0039 53.0971 88.4489 55.2511 88.3339C56.9021 88.2449 59.3611 86.3789 60.7511 86.5719C64.1501 87.0449 62.7271 95.2619 68.2141 92.1159C68.3931 93.7649 69.4811 93.8099 70.4641 92.8669C71.0141 95.1849 70.1621 97.7649 71.5021 99.8329C72.4511 101.298 74.1111 101.748 75.0201 103.34C75.9191 104.92 75.3771 105.849 75.4901 107.333C75.6251 109.138 75.7911 112.254 76.9481 113.589C78.5591 115.448 81.3621 114.833 81.5391 112.122C83.7761 112.317 79.3521 118.474 83.3101 118.838C85.0561 118.999 85.9511 116.511 85.5021 115.083C85.0711 113.705 83.6191 113.155 82.0411 112.79C82.0711 111.476 83.1341 110.492 83.2651 109.14C83.3941 107.817 82.7861 106.931 82.5721 105.778C81.8421 101.806 83.7491 102.424 86.2601 100.283C87.3201 99.3809 88.2281 97.8659 89.2421 96.8459C90.4961 95.5859 90.5961 93.5569 91.7551 92.7659C93.3301 91.6909 94.1031 93.2629 95.7031 93.3389C96.8881 93.3949 97.6191 92.3439 98.9601 92.6219C99.7721 94.9909 100.064 95.8299 100.054 98.1409C100.047 99.6359 99.9921 101.356 101.71 102.101C103.201 102.747 102.614 101.901 104.06 101.647C108.284 100.907 107.365 102.865 107.493 105.834C107.591 108.107 108.738 109.585 110.255 111.09C112.324 113.144 111.787 113.247 111.75 116.028C111.725 118.022 112.632 119.864 113.249 121.778C114.049 124.255 115.622 124.276 117.029 126.321C116.679 125.811 117.758 129.243 117.83 128.778C117.701 129.618 117.684 130.235 116.3 130.045C115.938 128.983 116.608 126.191 116.286 125.591C115.678 124.45 112.998 124.433 111.807 123.841C110.979 123.431 109.052 122.249 108.501 121.597C107.557 120.478 107.814 117.894 106.043 117.873C105.236 121.164 109.777 122.311 110.755 124.834C111.141 125.83 110.704 127.353 111.249 128.34C112.036 129.767 113.787 130.005 114.823 131.321C116.129 132.979 116.025 136.897 118.304 137.783C122.111 139.262 120.292 134.45 120.542 132.872C121.815 132.627 123.017 133.13 124.215 133.295C124.55 130.399 121.111 131.187 119.504 130.584C117.878 129.976 118.427 130.616 117.991 128.834C117.83 128.175 118.055 126.683 118.042 125.878C120.128 125.407 118.259 123.357 117.815 122.278C117.369 121.19 117.245 119.805 116.753 118.84C116.115 117.589 114.644 117.357 113.815 116.091C113.188 115.132 112.768 113.441 112.442 112.347C111.844 110.347 110.88 105.291 114.684 107.879C115.281 108.285 115.401 109.39 116.002 109.896C116.523 110.335 117.339 110.374 117.758 110.775C118.751 111.726 119.723 113.167 118.766 114.552C120.831 114.513 120.495 112.9 121.74 111.829C122.723 110.983 124.391 111.031 125.077 110.088C126.821 107.686 124.293 103.074 122.755 101.321C121.282 99.6429 117.156 95.6119 119.749 93.1269C120.292 92.6059 122.679 92.2169 123.02 93.0709C123.175 93.4599 121.166 95.5479 120.973 96.3339C121.869 97.4299 123.305 97.8549 124.708 97.5409C125.418 96.0109 125.193 94.3209 125.29 92.6279C126.936 92.0619 128.373 92.3429 130.064 92.0849C131.945 91.7969 132.752 90.8709 134.013 89.5979C136.2 87.3959 139.343 83.8269 139 80.5299C138.63 76.9599 138.026 75.1329 135.75 72.3299C134.869 71.2449 130.028 65.9269 134.229 66.2919C132.471 64.5699 129.612 65.3319 127.283 64.5419C127.468 62.6509 128.149 61.0459 130.405 61.3179C130.147 62.1069 130.481 63.2649 131.238 63.8349C132.977 65.1459 132.705 63.5229 133.987 63.2619C137.682 62.5099 136.526 66.3619 138.714 66.8729C139.032 68.1539 140.259 71.4049 141.738 71.7919C144.317 72.4669 144.889 69.1399 145.467 67.6409C144.136 67.1649 143.583 66.0979 142.812 65.0299C142.408 64.4679 142.338 63.8969 142.004 63.3979C141.513 62.6639 140.769 63.0959 140.494 62.0849C139.341 57.8229 145.35 59.7859 146.511 58.6589C147.693 57.5119 147.255 52.0209 147.505 50.3479C147.886 47.7989 148.085 44.3289 145.831 42.8119C148.451 44.6779 148.897 45.6449 150.249 48.3339C151.02 49.8719 152.073 51.0519 152.293 52.7919C155.041 53.2549 152.532 50.0689 151.963 49.3289C154.623 48.1749 150.735 45.2089 149.692 43.5859C148.294 41.4069 147.172 40.0469 144.537 39.6169C144.643 40.3939 144.397 41.0729 144.725 41.7839C144.331 41.9069 143.682 41.9049 143.287 41.7959C143.116 38.6859 139.665 37.8269 137.25 39.3649C135.707 37.8049 131.772 34.1499 135.745 32.3169C138.69 30.9579 142.854 33.2439 145.962 32.7969C146.653 29.5829 155.15 34.2859 150.024 27.3419C152.028 25.6189 152.432 28.0979 154.005 28.2709C156.356 28.5289 154.199 26.1289 156.242 25.8789C158.437 25.6109 160.591 33.3769 156.542 33.1279C154.665 36.8869 159.959 37.8279 161.76 39.7719C163.354 41.4899 163.397 44.2929 165.004 45.8089C165.481 44.5269 165.34 42.5109 165.305 41.0719C165.285 40.2959 165.29 39.5669 165.248 38.8349C165.204 38.0649 164.572 37.5769 164.785 36.6219C166.648 36.3799 165.508 34.1119 164.816 33.0849C163.761 31.5189 161.972 31.0949 162.536 28.8729C163.545 28.7109 164.654 29.2029 165.498 29.0959C166.025 29.0299 166.271 28.1379 166.555 28.1239C166.887 28.1069 167.88 28.6379 167.987 28.5979C169.377 28.0629 169.018 28.0479 170.05 27.3359C171.006 26.6759 171.845 25.8909 172.965 25.7929C171.906 23.8479 170.52 23.0129 170.531 20.3739C172.177 20.2949 173.681 20.2649 175.248 20.7679C176.45 21.1539 177.136 21.9849 178.477 21.7989C175.979 18.0069 167.553 17.5709 163.442 16.2749C159.168 14.9279 154.577 14.6289 150.288 14.8749C150.408 15.7869 150.829 16.4389 151.226 17.2999C149.382 17.7909 148.996 16.0709 149.211 14.6249C146.151 14.4799 143.497 15.8829 140.5 15.6429C137.851 15.4309 135.731 13.7729 132.499 13.8379C128.835 13.9119 127.754 12.3489 124.498 11.3799C120.794 10.2779 116.185 13.3399 112.702 11.5909C113.739 10.7149 115.217 10.8499 116.429 10.3989C115.496 10.1559 109.873 9.39094 111.164 10.8039C110.633 10.2259 110.724 9.74094 110.532 9.12894C113.833 9.21594 111.917 6.59494 109.749 6.58194C109.172 6.57794 107.315 7.19194 107.228 7.83094C106.999 9.47094 110.07 9.10094 110.971 9.12394C110.724 10.2749 109.365 10.6489 108.464 11.3239C109.224 12.6639 113.661 12.2839 113.528 13.3439C113.29 15.2399 109.354 14.0129 108.43 13.6549C107.809 13.4139 107.735 12.6979 107.003 12.5809C106.247 12.4599 105.356 13.0639 104.947 13.0369C103.138 12.9179 101.839 11.6079 100.24 10.8989C96.3861 9.19094 93.1341 11.0899 89.2471 10.8369C87.4411 10.7189 86.1301 9.78594 84.2471 9.82394C82.4501 9.86094 80.7001 10.4009 78.7641 10.2989C79.4421 9.42894 81.3641 7.98794 82.4701 7.54294C81.0221 3.64694 68.6061 4.92994 65.0361 5.12394C64.9371 7.77894 62.1911 7.15094 60.3141 7.33094C57.5271 7.59694 55.6871 9.26294 53.0231 9.62894C57.0151 16.0679 46.2521 8.06094 48.1521 12.6599C47.3881 12.7049 45.6661 12.8019 45.4801 13.8379C45.1951 15.4239 47.7221 15.5179 48.5641 16.3239C50.3651 18.0509 50.3401 21.9589 46.7481 20.8619C42.8441 19.6699 49.0811 9.89094 43.0031 11.0809C39.8281 11.7029 41.2621 13.8609 41.5651 16.0319C41.9091 18.4889 41.3781 19.0789 39.5461 20.6489C37.8671 22.0869 36.6721 22.7809 37.2481 25.3359C37.6541 27.1349 39.3091 28.0499 39.7601 29.8239C40.4991 32.7259 39.3251 36.8219 39.5041 39.8289C39.8381 45.4249 36.7461 44.1089 32.7471 43.3369C28.6271 42.5419 27.8531 46.4629 29.7971 49.0179C30.3651 49.7649 31.3011 49.7589 31.5091 50.8359C31.7561 52.1109 30.8331 52.0969 30.6801 52.7679C30.4791 53.6399 30.2491 53.8699 30.2421 54.7869C30.2371 55.3479 31.1601 55.8089 30.9601 56.7989C29.3061 57.0609 21.3351 54.2829 21.2481 56.3369" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M159 57.8335C158.747 55.9115 154.623 54.8885 153.996 56.8285C153.674 57.8255 156.568 60.2055 157.318 61.2645C158.972 63.5965 158.991 64.8655 159 67.8335C159.01 71.3005 157.911 71.1825 154.75 72.3205C153.666 72.7105 152.46 73.3525 151.55 74.0845C151.036 74.4985 149.504 76.9945 149.006 77.0505C147.485 77.2225 147.384 75.0295 147.745 74.0845C148.342 72.5215 149.607 72.5875 150.8 72.0955C152.134 71.5445 153.457 71.3435 154.188 70.0255C154.959 68.6325 154.173 66.9995 154.934 65.5705C155.454 64.5915 156.432 64.5295 156.756 63.3335C157.089 62.1065 155.822 60.8175 155.983 60.0835C156.276 58.7305 159.089 57.8185 156.752 56.5835" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M141.25 97.8325C141.001 97.6285 140.782 97.4495 140.514 97.3535C137.218 100.69 140.405 101.162 141.701 103.833C142.263 104.99 142.354 107.299 142.097 108.507C143.173 107.665 142.66 106.205 143.247 105.584C144.393 104.371 143.989 105.203 144.995 105.584C145.51 105.779 146.024 107.876 147.214 106.606C148.605 105.123 146.037 104.789 145.489 104.584C143.78 103.944 140.979 104.658 141.235 101.82C141.348 100.553 142.998 101.074 142.718 99.5825C142.581 98.8505 140.658 98.0985 140.5 98.0825" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M149.75 113.333C149.759 113.774 151.328 115.42 151.255 116.084C151.106 117.444 150.117 117.853 149.051 116.853C149.157 117.519 148.906 118.367 148.962 119.045C146.698 119.39 147.983 116.926 146.506 116.578C145.376 116.311 144.662 117.76 143.539 117.8C143.137 115.126 145.046 115.281 146.494 114.779C148.32 114.142 148.855 114.744 148.943 112.086C148.956 111.725 148.691 108.807 148.517 108.579C147.191 106.839 146.795 108.926 147.042 110.284C147.351 111.978 149.247 111.424 146.998 112.584C146.375 112.906 144.097 113.125 143.549 112.602C142.453 111.557 143.152 109.121 144.754 109.317C145.38 109.395 146.933 111.369 147.498 111.836" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M138.5 109.583C140.12 111.301 137.396 112.892 137.032 114.544C138.79 114.541 141.15 110.784 139 110.083" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M136 118.333C134.043 119.297 134.509 122.249 133.062 123.656C131.978 124.709 129.623 124.885 128.245 125.826C126.781 126.826 124.924 128.184 125.232 130.143C125.709 133.17 127.951 132.815 130.189 133.131C131.705 133.346 133.812 134.965 135.001 134.83C138.189 134.468 136.189 131.376 136.488 129.637C136.683 128.508 137.763 128.231 138.017 127.344C138.3 126.358 137.712 125.248 137.75 124.27C137.817 122.526 138.128 120.369 140.229 120.018C138.912 118.858 134.442 115.039 135.499 119.831" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M143 127.083C141.186 127.492 140.887 130.963 140.994 132.601C141.025 133.085 141.493 133.91 141.443 134.333C141.369 134.972 140.753 135.798 140.73 136.271C140.685 137.26 140.209 139.301 142.06 138.394C143.271 137.8 142.712 135.57 142.788 134.359C144.164 134.717 144.832 139.372 146.456 138.099C148.396 136.581 144.79 133.92 144.089 133.027C145.127 132.381 146.07 131.249 146.211 130.121C144.414 129.656 142.404 132.676 142.501 129.277C142.546 127.697 143.018 127.513 144.514 127.339C146.106 127.153 145.632 127.97 147.038 128.277C151.299 129.204 149.892 124.076 146.994 125.329C145.14 126.13 145.254 129.014 142.788 128.796C142.74 128.422 142.689 127.968 142.75 127.584" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M152.75 126.583C151.834 129.332 153.95 129.685 153.949 131.583C153.948 132.858 152.165 133.351 152.289 134.795C154.173 135.046 155.432 133.095 156.986 133.546C155.224 132.074 153.174 132.683 153.556 129.333C153.659 128.426 154.765 127.272 154.502 126.327C154.222 125.317 153.206 124.993 152.748 125.833" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M62.25 2.3331C59.459 3.5931 58.331 0.814105 56.25 0.833105C54.671 0.847105 54.055 1.9691 55.539 3.0451C56.277 3.5811 59.148 3.1441 60.213 3.3701C60.339 4.9241 62.861 4.7541 62.75 3.0821" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default Asia;
