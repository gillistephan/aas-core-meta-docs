import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";

function Footer() {
  const { footer } = useThemeConfig();

  if (!footer) {
    return null;
  }

  return (
    <footer className="footer">
      <div className="bg-[var(--ifm-footer-background-color)] mx-auto w-full max-w-screen-lg">
        Footer
      </div>
    </footer>
  );
}

export default Footer;
