import AboutSkeleton from "./AboutSkeleton";
import CareersSkeleton from "./CareersSkeleton";
import ClientsSkeleton from "./ClientsSkeleton";
import ContactSkeleton from "./ContactSkeleton";
import GallerySkeleton from "./GallerySkeleton";
import HomeSkeleton from "./HomeSkeleton";
import ServicesSkeleton from "./ServicesSkeleton";
import TrainingSkeleton from "./TrainingSkeleton";

const ROUTE_SKELETONS = {
  "/": ["Home", HomeSkeleton],
  "/about": ["About", AboutSkeleton],
  "/careers": ["Careers", CareersSkeleton],
  "/clients": ["Clients", ClientsSkeleton],
  "/contact": ["Contact", ContactSkeleton],
  "/gallery": ["Gallery", GallerySkeleton],
  "/services": ["Services", ServicesSkeleton],
  "/training": ["Training", TrainingSkeleton],
};

export default function RouteSkeleton({ pathname }) {
  const route = ROUTE_SKELETONS[pathname];

  if (!route) {
    return null;
  }

  const [label, Skeleton] = route;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={`Loading ${label} page`}
      className="route-skeleton fixed inset-x-0 bottom-0 top-[82px] z-[40] overflow-y-auto bg-ivory"
    >
      <div aria-hidden="true">
        <Skeleton />
      </div>
    </div>
  );
}