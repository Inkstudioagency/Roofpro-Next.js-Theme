import Link from "next/link";
import { ButtonLabel } from "@/components/ui/button-label";

export function NotFoundContent() {
  return (
    <div className="utility-page-content top-space side-none">
      <div className="section-gap-sm">
        <div className="container-main">
          <div className="not-found-content-block">
            <div className="not-found-text-block">
              <h1 className="not-found-text">
                4<span className="not-found-ht-text">0</span>4
              </h1>
              <h2 className="heading-style-2">Page Not Found</h2>
              <div className="paragraph-small">The page you are looking for doesn&#x27;t exist or has been moved</div>
            </div>
            <div className="not-found-button-block">
              <Link className="primary-button link-block" href="/">
                <ButtonLabel>Go To Home</ButtonLabel>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
