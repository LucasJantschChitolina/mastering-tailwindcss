import { ComponentProps } from "react";

interface InputPrefixProps extends ComponentProps<"div"> {}

export function Prefix(props: InputPrefixProps) {
  return <div {...props}></div>;
}

type InputControlProps = ComponentProps<"input">;

export function Control(props: InputControlProps) {
  return (
    <input
      {...props}
      className="flex-1 border-0 bg-transparent text-zinc-900 placeholder-zinc-600"
    />
  );
}

type InputRootProps = ComponentProps<"div">;

export const Root = (props: InputRootProps) => {
  return (
    <div
      {...props}
      className="flex w-full items-center mx-1 gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
    ></div>
  );
};
