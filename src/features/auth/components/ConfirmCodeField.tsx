import { Field, FieldGroup, FieldSet } from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";

const ConfirmCodeField = () => {
	return (
		<FieldSet className="w-full">
			<FieldGroup>
				<Field className="gap-2">
					<Input id="username" type="number" placeholder="xxxxxx" />
				</Field>
			</FieldGroup>
		</FieldSet>
	);
};

export default ConfirmCodeField;
