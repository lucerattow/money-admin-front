import React, { ReactElement, ReactNode } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ScrollArea } from "@/components/ui";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { cn, applyStylesToElement } from "@/lib/utils";
// import useResizeObserver from "use-resize-observer";

interface TreeDataItem {
  id: string;
  name: string;
  icon?: ReactElement;
  actions?: ReactNode;
  children?: TreeDataItem[];
}

type TreeProps = React.HTMLAttributes<HTMLDivElement> & {
  data: TreeDataItem[] | TreeDataItem,
  initialSlelectedItemId?: string,
  onSelectChange?: (item: TreeDataItem | undefined) => void,
  expandAll?: boolean,
  folderIcon?: ReactElement,
  itemIcon?: ReactElement;
};

const Tree = React.forwardRef<
  HTMLDivElement,
  TreeProps
>(({ data, initialSlelectedItemId, onSelectChange, expandAll, folderIcon, itemIcon, className, ...props }, ref) => {
  const [selectedItemId, setSelectedItemId] = React.useState<string | undefined>(initialSlelectedItemId);

  const handleSelectChange = React.useCallback((item: TreeDataItem | undefined) => {
    setSelectedItemId(item?.id);
    if (onSelectChange) {
      onSelectChange(item);
    }
  }, [onSelectChange]);

  const expandedItemIds = React.useMemo(() => {
    if (!initialSlelectedItemId) {
      return [] as string[];
    }

    const ids: string[] = [];

    function walkTreeItems(items: TreeDataItem[] | TreeDataItem, targetId: string) {
      if (items instanceof Array) {
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (let i = 0; i < items.length; i++) {
          ids.push(items[i]!.id);
          if (walkTreeItems(items[i]!, targetId) && !expandAll) {
            return true;
          }
          if (!expandAll) ids.pop();
        }
      } else if (!expandAll && items.id === targetId) {
        return true;
      } else if (items.children) {
        return walkTreeItems(items.children, targetId);
      }
    }

    walkTreeItems(data, initialSlelectedItemId);
    return ids;
  }, [data, initialSlelectedItemId]);

  // const { ref: refRoot, width, height } = useResizeObserver();

  return (
    <div className={cn("rounded-md overflow-hidden", className)}>
      <ScrollArea>
        <div className="relative">
          <TreeItem
            data={data}
            ref={ref}
            selectedItemId={selectedItemId}
            handleSelectChange={handleSelectChange}
            expandedItemIds={expandedItemIds}
            FolderIcon={folderIcon}
            ItemIcon={itemIcon}
            {...props}
          />
        </div>
      </ScrollArea>
    </div>
  );
});

type TreeItemProps = TreeProps & {
  selectedItemId?: string,
  handleSelectChange: (item: TreeDataItem | undefined) => void,
  expandedItemIds: string[],
  FolderIcon?: ReactElement,
  ItemIcon?: ReactElement;
  depth?: number;
};

const TreeItem = React.forwardRef<
  HTMLDivElement,
  TreeItemProps
>(({ className, data, selectedItemId, handleSelectChange, expandedItemIds, FolderIcon, ItemIcon, depth = 0, ...props }, ref) => {
  const paddintLeft = `${(depth * 24) + 8}px`;

  return (
    <div ref={ref} role="tree" className={className} {...props}><ul>
      {data instanceof Array ? (
        data.map((item) => {
          const iconStyles = "h-4 w-4 shrink-0 mr-2 text-accent-foreground/50 w-4 h-4";
          return (
            <li key={item.id}>
              {item.children ? (
                <AccordionPrimitive.Root type="multiple" defaultValue={expandedItemIds}>
                  <AccordionPrimitive.Item value={item.id}>
                    <AccordionTrigger
                      className={cn(
                        "px-2 hover:bg-muted/80 hover:before:opacity-100 before:absolute before:left-0 before:w-full before:opacity-0 before:bg-muted/80 before:h-[1.75rem] before:-z-10",
                        selectedItemId === item.id && "before:opacity-100 before:bg-accent text-accent-foreground before:border-l-2 before:border-l-accent-foreground/50 dark:before:border-0",
                      )}
                      style={{ paddingLeft: paddintLeft }}
                      onClick={() => handleSelectChange(item)}
                    >
                      {applyStylesToElement(item.icon, iconStyles)}
                      {!item.icon && applyStylesToElement(FolderIcon, iconStyles)}
                      <span className="text-sm truncate">{item.name}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <TreeItem
                        data={item.children ? item.children : item}
                        selectedItemId={selectedItemId}
                        handleSelectChange={handleSelectChange}
                        expandedItemIds={expandedItemIds}
                        FolderIcon={FolderIcon}
                        ItemIcon={ItemIcon}
                        depth={depth + 1}
                      />
                    </AccordionContent>
                  </AccordionPrimitive.Item>
                </AccordionPrimitive.Root>
              ) : (
                <Leaf
                  item={item}
                  isSelected={selectedItemId === item.id}
                  onClick={() => handleSelectChange(item)}
                  icon={ItemIcon}
                  depth={depth}
                />
              )}
            </li>
          );
        })
      ) : (
        <li>
          <Leaf
            item={data}
            isSelected={selectedItemId === data.id}
            onClick={() => handleSelectChange(data)}
            icon={ItemIcon}
            depth={depth}
          />
        </li>
      )}
    </ul></div>
  );
});

const Leaf = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    item: TreeDataItem, isSelected?: boolean,
    icon?: ReactElement;
    depth?: number;
  }
>(({ className, item, isSelected, icon, depth = 0, ...props }, ref) => {
  const iconStyles = "h-4 w-4 shrink-0 mr-2 text-accent-foreground/50 w-4 h-4";
  const paddintLeft = `${(depth * 24) + 8}px`;

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center py-2 px-2 cursor-pointer hover:bg-muted/80 group",
        "hover:before:opacity-100 before:absolute before:left-0 before:right-1 before:w-full before:opacity-0 before:bg-muted/80 before:h-[1.75rem] before:-z-10",
        className,
        isSelected && "before:opacity-100 before:bg-accent text-accent-foreground before:border-l-2 before:border-l-accent-foreground/50 dark:before:border-0",
      )}
      style={{ paddingLeft: paddintLeft }}
      {...props}
    >
      {applyStylesToElement(item.icon, iconStyles) || applyStylesToElement(icon, iconStyles)}
      <span className="flex-grow text-sm truncate">{item.name}</span>
      <div className="flex flex-row ml-auto">{item.actions}</div>
    </div>
  );
});

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 w-full items-center py-2 transition-all last:[&[data-state=open]>svg]:rotate-90",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="h-4 w-4 ml-auto shrink-0 text-muted-foreground transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div className="pb-1 pt-0">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Tree, type TreeDataItem };
