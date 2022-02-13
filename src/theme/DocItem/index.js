/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import DocPaginator from "@theme/DocPaginator";
import DocVersionBanner from "@theme/DocVersionBanner";
import Seo from "@theme/Seo";
import LastUpdated from "@theme/LastUpdated";
import TOC from "@theme/TOC";
import TOCCollapsible from "@theme/TOCCollapsible";
import { MainHeading } from "@theme/Heading";
import clsx from "clsx";
import styles from "./styles.module.css";
import { useActivePlugin, useVersions } from "@theme/hooks/useDocs";
import useWindowSize from "@theme/hooks/useWindowSize";

function DocItem(props) {
  const { content: DocContent, versionMetadata } = props;
  const { metadata, frontMatter } = DocContent;
  const {
    image,
    keywords,
    hide_title: hideTitle,
    hide_table_of_contents: hideTableOfContents,
  } = frontMatter;
  const {
    description,
    title,

    lastUpdatedAt,
    formattedLastUpdatedAt,
    lastUpdatedBy,
  } = metadata;
  const { pluginId } = useActivePlugin({
    failfast: true,
  });
  const versions = useVersions(pluginId); // If site is not versioned or only one version is included
  // we don't show the version badge
  // See https://github.com/facebook/docusaurus/issues/3362

  const showVersionBadge = versions.length > 1; // We only add a title if:
  // - user asks to hide it with frontmatter
  // - the markdown content does not already contain a top-level h1 heading

  const shouldAddTitle =
    !hideTitle && typeof DocContent.contentTitle === "undefined";

  const windowSize = useWindowSize();

  const renderTocMobile =
    !hideTableOfContents &&
    DocContent.toc &&
    (windowSize === "mobile" || windowSize === "ssr");

  const renderTocDesktop =
    !hideTableOfContents &&
    DocContent.toc &&
    (windowSize === "desktop" || windowSize === "ssr");

  return (
    <>
      <Seo
        {...{
          title,
          description,
          keywords,
          image,
        }}
      />

      <div className="mx-auto md:px-8">
        <DocVersionBanner versionMetadata={versionMetadata} />
        <article>
          <div className="grid-cols-[minmax(900px,_1fr)_14rem] md:grid">
            <div className="">
              <article className="md:prose-md prose lg:prose-lg mx-auto my-12 max-w-full px-6">
                {renderTocMobile && (
                  <TOCCollapsible
                    toc={DocContent.toc}
                    className={clsx("mb-10 p-3 text-lg", styles.tocMobile)}
                  />
                )}
                {shouldAddTitle && <MainHeading>{title}</MainHeading>}
                <DocContent />
              </article>

              <div>
                {(lastUpdatedAt || lastUpdatedBy) && (
                  <div>
                    {(lastUpdatedAt || lastUpdatedBy) && (
                      <LastUpdated
                        lastUpdatedAt={lastUpdatedAt}
                        formattedLastUpdatedAt={formattedLastUpdatedAt}
                        lastUpdatedBy={lastUpdatedBy}
                      />
                    )}
                  </div>
                )}
                <div className="margin-vert--lg">
                  <DocPaginator metadata={metadata} />
                </div>
              </div>
            </div>

            {renderTocDesktop && (
              <div className="">
                <TOC toc={DocContent.toc} />
              </div>
            )}
          </div>
        </article>
      </div>
    </>
  );
}

export default DocItem;
