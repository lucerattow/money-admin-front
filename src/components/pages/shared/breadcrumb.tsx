import { Fragment } from "react";
import {
  Breadcrumb as Bread,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui";
import { IBreadcrumbItem } from "@/lib/interfaces";

interface BreadcrumbProp {
  items?: IBreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProp) => {
  return (
    <Bread>
      <BreadcrumbList>
        {items && items.map((item, index) => (
          <Fragment key={index}>
            {index > 0 && index <= (items.length - 1) && (
              <BreadcrumbSeparator />
            )}
            <BreadcrumbItem>
              {item.to ? (
                <BreadcrumbLink to={item.to}>
                  {item.label}
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>
                  {item.label}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Bread>
  );
};