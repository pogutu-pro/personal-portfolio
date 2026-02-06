import { cloneElement, forwardRef, isValidElement } from "react"

import { cn } from "@/lib/utils"

type AnyProps = Record<string, unknown>

function composeEventHandlers<E>(
  theirs: ((event: E) => void) | undefined,
  ours: ((event: E) => void) | undefined
) {
  return (event: E) => {
    theirs?.(event)
    ours?.(event)
  }
}

function mergeProps(slotProps: AnyProps, childProps: AnyProps) {
  const merged: AnyProps = { ...childProps, ...slotProps }

  for (const key of Object.keys(childProps)) {
    if (key === "className") continue
    if (!key.startsWith("on")) continue

    const childHandler = childProps[key]
    const slotHandler = slotProps[key]

    if (typeof childHandler === "function" && typeof slotHandler === "function") {
      merged[key] = composeEventHandlers(
        childHandler as (event: unknown) => void,
        slotHandler as (event: unknown) => void
      )
    }
  }

  merged.className = cn(childProps.className as string | undefined, slotProps.className as string | undefined)

  return merged
}

export interface SlotProps {
  children: React.ReactElement
  className?: string
}

export const Slot = forwardRef<HTMLElement, SlotProps & React.HTMLAttributes<HTMLElement>>(
  ({ children, ...slotProps }, forwardedRef) => {
    if (!isValidElement(children)) return null

    const mergedProps = mergeProps(slotProps as AnyProps, children.props as AnyProps)

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return cloneElement(children, { ...mergedProps, ref: forwardedRef } as AnyProps)
  }
)

Slot.displayName = "Slot"

