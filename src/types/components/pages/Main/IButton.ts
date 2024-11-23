import { ColorProps, SizeProps } from "../../../common";

export interface IButton {
    width: SizeProps;
    height: SizeProps;
    backgroundColor?: ColorProps;
    bgColor?: ColorProps;
    borderRadius?: SizeProps;
    content: string;
    icon?: string;
    color: ColorProps;
    fontSize: SizeProps;
}