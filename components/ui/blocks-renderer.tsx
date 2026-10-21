import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { mediaUrl } from "@/lib/strapi/client";
import type { BlockNode, BlocksContent, InlineNode } from "@/lib/strapi/types";

/** Renders Strapi "Blocks" rich text with plain semantic HTML, styled by the surrounding `.rich-text`. */
export function BlocksRenderer({ content }: { content: BlocksContent | null | undefined }) {
  if (!content?.length) return null;
  return <>{content.map((block, i) => renderBlock(block, i))}</>;
}

function renderBlock(block: BlockNode, key: number): ReactNode {
  switch (block.type) {
    case "paragraph":
      return <p key={key}>{renderInline(block.children)}</p>;
    case "heading": {
      const Tag = `h${block.level}` as const;
      return <Tag key={key}>{renderInline(block.children)}</Tag>;
    }
    case "quote":
      return <blockquote key={key}>{renderInline(block.children)}</blockquote>;
    case "code":
      return (
        <pre key={key}>
          <code>{block.children.map((c) => ("text" in c ? c.text : "")).join("")}</code>
        </pre>
      );
    case "list": {
      const items = block.children.map((item, i) => <li key={i}>{renderInline(item.children)}</li>);
      return block.format === "ordered" ? <ol key={key}>{items}</ol> : <ul key={key}>{items}</ul>;
    }
    case "image":
      return (
        <figure key={key}>
          <div>
            <Image
              src={mediaUrl(block.image.url)}
              alt={block.image.alternativeText ?? ""}
              width={block.image.width ?? 1344}
              height={block.image.height ?? 800}
              sizes="(max-width: 991px) 100vw, 920px"
            />
          </div>
          {block.image.caption && <figcaption>{block.image.caption}</figcaption>}
        </figure>
      );
    default:
      return null;
  }
}

function renderInline(nodes: InlineNode[]): ReactNode {
  return nodes.map((node, i) => {
    if (node.type === "link") {
      const external = /^https?:\/\//.test(node.url);
      return external ? (
        <a key={i} href={node.url} target="_blank" rel="noopener noreferrer">
          {renderInline(node.children)}
        </a>
      ) : (
        <Link key={i} href={node.url}>
          {renderInline(node.children)}
        </Link>
      );
    }
    let text: ReactNode = node.text;
    if (node.code) text = <code>{text}</code>;
    if (node.bold) text = <strong>{text}</strong>;
    if (node.italic) text = <em>{text}</em>;
    if (node.underline) text = <u>{text}</u>;
    if (node.strikethrough) text = <s>{text}</s>;
    return <span key={i}>{text}</span>;
  });
}
