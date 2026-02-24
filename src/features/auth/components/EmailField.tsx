import { Field, FieldGroup, FieldSet } from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";

interface Props {
	disabled: boolean;
}

const EmailField = ({ disabled }: Props) => {
	return (
		<FieldSet className="w-full">
			<FieldGroup>
				<Field className="gap-2">
					<Input
						disabled={disabled}
						id="email"
						type="text"
						placeholder="xxx@gmail.com"
					/>
				</Field>
			</FieldGroup>
		</FieldSet>
	);
};

export default EmailField;
