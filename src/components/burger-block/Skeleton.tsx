import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props: any) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={456}
    viewBox="0 0 280 456"
    backgroundColor="#c7c7c7"
    foregroundColor="#d6d6d6"
    {...props}
  >
    <rect x="39" y="18" rx="63" ry="63" width="197" height="180" />
    <rect x="144" y="400" rx="20" ry="20" width="131" height="46" />
    <rect x="13" y="274" rx="20" ry="20" width="260" height="114" />
    <rect x="22" y="225" rx="20" ry="20" width="242" height="34" />
  </ContentLoader>
);

export default Skeleton;
