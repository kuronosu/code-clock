import React from "react"

export default function PyClock({ time }: Readonly<{ time: Date }>) {
  return (
    <div className="flex flex-col items-center justify-center">
      <code
        className="text-2xl"
        // style={{ "--tab-color": "#F8D70033" } as React.CSSProperties}
      >
        <KeyWord value="class" /> <Const value="Clock" />
        <Operator value=":" />
        <Tab>
          <KeyWord value="def" /> <Method value="__init__" />
          <Brackets value="(" />
          <Variable text="self" />
          <Brackets value=")" />
          <Operator value=":" />
          <Tab>
            <BreakChildren>
              <NumberProperty name="hh" value={time.getHours()} />
              <NumberProperty name="mm" value={time.getMinutes()} />
              <NumberProperty name="ss" value={time.getSeconds()} />
              <span />
              <NumberProperty name="DD" value={time.getDate()} />
              <StringProperty
                name="MM"
                value={time.toLocaleString("en-GB", { month: "long" })}
              />
              <NumberProperty name="YYYY" value={time.getFullYear()} />
            </BreakChildren>
          </Tab>
        </Tab>
      </code>
    </div>
  )
}

const Tab = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <div className="pl-[2em] border-l-2 border-[var(--tab-color,#FFFFFF33)]">
    {children}
  </div>
)

interface BreakChildrenProps {
  children: React.ReactNode | React.ReactNode[]
}

const BreakChildren: React.FC<BreakChildrenProps> = ({ children }) => {
  return (
    <div>
      {React.Children.toArray(children).map((child, index) => (
        <React.Fragment key={index}>
          {child}
          {index < React.Children.count(children) - 1 && <br />}
        </React.Fragment>
      ))}
    </div>
  )
}

const KeyWord = ({ value }: Readonly<{ value: string }>) => (
  <span className="text-[#569CD6]">{value}</span>
)

const Const = ({ value }: Readonly<{ value: string }>) => (
  <span className="text-[#4EC9B0]">{value}</span>
)
const Variable = ({ text }: Readonly<{ text: string }>) => (
  <span className="text-[#9CDCFE]">{text}</span>
)

const Operator = ({ value }: Readonly<{ value: string }>) => (
  <span className="text-[#CCCCCC]">{value}</span>
)

const Brackets = ({ value }: Readonly<{ value: string }>) => (
  <span className="text-[#FFD700]">{value}</span>
)

const Method = ({ value }: Readonly<{ value: string }>) => (
  <span className="text-[#DCDCAA]">{value}</span>
)

const NumberValue = ({ value }: Readonly<{ value: number }>) => (
  <span className="text-[#A7CEA8]">{value}</span>
)

const StringValue = ({ value }: Readonly<{ value: string }>) => (
  <span className="text-[#CE9178]">&quot;{value}&quot;</span>
)

const NumberProperty = ({
  name,
  value,
}: Readonly<{ name: string; value: number }>) => (
  <>
    <Variable text="self" />
    <Operator value="." />
    <Variable text={name} />
    <Operator value=" = " />
    <NumberValue value={value} />
  </>
)

const StringProperty = ({
  name,
  value,
}: Readonly<{ name: string; value: string }>) => (
  <>
    <Variable text="self" />
    <Operator value="." />
    <Variable text={name} />
    <Operator value=" = " />
    <StringValue value={value} />
  </>
)
