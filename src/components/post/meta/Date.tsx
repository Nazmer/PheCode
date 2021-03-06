import { format, formatISO } from "date-fns";

type Props = {
	date: Date;
};
export default function Date({ date }: Props) {
	return (
		// FIXME
		// <time dateTime={formatISO(date)}>
		<time dateTime={formatISO(0)}>
			<span>{format(date, "dd-LL-yyyy")}</span>

			<style jsx>
				{`
					span {
						color: #9b9b9b;
					}
				`}
			</style>
		</time>
	);
}
