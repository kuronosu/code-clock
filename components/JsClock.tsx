export default function JsClock({ time }: Readonly<{ time: Date }>) {
  return (
    <div className="flex flex-col items-center justify-center">
      <code className="text-2xl">
        <KeyWord value="const" /> <Const value="clock" />{" "}
        <Operator value="=" /> <Brackets value="{" />
        <NumberProperty name="hour" value={time.getHours() % 12 || 12} />
        <NumberProperty name="minute" value={time.getMinutes()} />
        <NumberProperty name="second" value={time.getSeconds()} />
        <StringProperty name="period" value={time.getHours() >= 12 ? "PM" : "AM"} />
        <NumberProperty name="day" value={time.getDate()} />
        <StringProperty name="month" value={time.toLocaleString("en-GB", { month: "long" })} />
        <NumberProperty name="year" value={time.getFullYear()} />
        <Brackets value="}" />

      </code>
    </div>
  )
}

const Tab = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <div className="pl-4">{children}</div>
)

const KeyWord = ({ value }: Readonly<{ value: string }>) => (
  <span className="text-[#4A9CD6]">{value}</span>
)

const Const = ({ value }: Readonly<{ value: string }>) => (
  <span className="text-[#44C1FF]">{value}</span>
)
const Variable = ({ text }: Readonly<{ text: string }>) => (
  <span className="text-[#9CDCFE]">{text}</span>
)

const Operator = ({ value }: Readonly<{ value: string }>) => (
  <span className="text-[#D4D4D4]">{value}</span>
)

const Brackets = ({ value }: Readonly<{ value: string }>) => (
  <span className="text-[#F8D700]">{value}</span>
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
  <Tab>
    <Variable text={name} />
    <Operator value=": " />
    <NumberValue value={value} />
    <Operator value="," />
  </Tab>
)

const StringProperty = ({
  name,
  value,
}: Readonly<{ name: string; value: string }>) => (
  <Tab>
    <Variable text={name} />
    <Operator value=": " />
    <StringValue value={value} />
    <Operator value="," />
  </Tab>
)