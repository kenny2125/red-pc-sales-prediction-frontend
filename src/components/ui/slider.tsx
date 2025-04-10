import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/utils"

interface SliderProps {
  className?: string
  value?: number
  onChange?: (value: number) => void
  defaultValue?: number[]
  min?: number
  max?: number
  step?: number
}

function Slider({
  className,
  defaultValue,
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  ...props
}: SliderProps) {
  const [internalValue, setInternalValue] = React.useState(value ?? defaultValue?.[0] ?? min)

  const handleSliderChange = React.useCallback((newValue: number[]) => {
    setInternalValue(newValue[0])
  }, [])

  const handleSliderCommit = React.useCallback((newValue: number[]) => {
    onChange?.(newValue[0])
  }, [onChange])

  React.useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value)
    }
  }, [value])

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={[internalValue]}
      value={[internalValue]}
      min={min}
      max={max}
      step={step}
      onValueChange={handleSliderChange}
      onValueCommit={handleSliderCommit}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className="relative grow rounded-full h-2 w-full overflow-hidden bg-muted"
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className="absolute h-full bg-primary"
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        data-slot="slider-thumb"
        className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 drag:cursor-grabbing hover:cursor-grab active:cursor-grabbing hover:scale-110 touch-none"
      />
    </SliderPrimitive.Root>
  )
}

export { Slider }
