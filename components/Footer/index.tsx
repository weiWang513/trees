import Image from "next/image";
import "./index.scss";
import CompC from "./compC";
export default function Footer({ inner }: any) {
  return (
    <div className="footer">
      {inner ? <></> : <CompC />}
      <div className="foot m-auto flex items-center justify-center">
        {inner ? (
          <CompC />
        ) : (
          <Image
            src="/images/logo-l.png"
            alt="Logo"
            width={68}
            height={68}
            quality={100}
            priority
          />
        )}
      </div>
    </div>
  );
}
