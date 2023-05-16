import { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import useIsMobile from "../hooks/useIsMobile";

export const SkeletonCardItem = (props) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <ContentLoader
        speed={0.5}
        width={560}
        height={139}
        viewBox="0 0 560 139"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="135" y="83" rx="6" ry="6" width="88" height="29" />
        <rect x="135" y="11" rx="3" ry="3" width="422" height="19" />
        <rect x="135" y="44" rx="3" ry="3" width="422" height="27" />
        <rect x="0" y="158" rx="3" ry="3" width="178" height="6" />
        <rect x="0" y="8" rx="0" ry="0" width="115" height="105" />
      </ContentLoader>
    );
  } else {
    return (
      <ContentLoader
        speed={2}
        width={500}
        height={700}
        viewBox="0 0 500 700"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="0" y="524" rx="3" ry="3" width="500" height="50" />
        <rect x="0" y="635" rx="3" ry="3" width="189" height="60" />
        <rect x="369" y="645" rx="3" ry="3" width="127" height="40" />
        <rect x="0" y="0" rx="0" ry="0" width="500" height="500" />
        <rect x="0" y="584" rx="3" ry="3" width="500" height="30" />
      </ContentLoader>
    );
  }
};

export const HeadingMainPage = (props) => {
  const isMobile = useIsMobile();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(isMobile ? 560 : 1360);
  }, [isMobile]);

  return (
    <ContentLoader
      width={width}
      speed={2}
      height={50}
      viewBox={`0 0 ${width} 50`}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="0" rx="3" ry="3" width="200" height="50" />
      <rect x={width - 120} y="10" rx="3" ry="3" width="120" height="30" />
    </ContentLoader>
  );
};

export const ListSkeletonCardItem = ({ count = 4 }) => {
  return (
    <>
      <div className="heading">
        <HeadingMainPage />
      </div>
      <div className="content">
        {Array(count)
          .fill(<SkeletonCardItem />)
          .map((skeleton, index) => (
            <SkeletonCardItem key={index} />
          ))}
      </div>
    </>
  );
};
