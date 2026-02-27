import { Skeleton } from "@/shared/ui/skeleton";

const ConversationSkeleton = () => {
	return (
		<div className="w-full px-2 py-3">
			<div className="flex items-center gap-2">
				<div>
					<Skeleton className="size-12 rounded-full" />
				</div>
				<div className="min-w-0 flex-1 flex flex-col gap-1.5">
					<div className="w-full flex items-center justify-between gap-2">
						<Skeleton className="w-22.5 h-3" />
						<Skeleton className="w-10 h-3" />
					</div>
					<div className="w-full flex items-center justify-between gap-2">
						<Skeleton className="w-45 h-3" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConversationSkeleton;
