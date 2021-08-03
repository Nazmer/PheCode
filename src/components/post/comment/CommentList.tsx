import Comment from "@components/post/comment/Comment";
import AddCommentBox from "@components/post/comment/AddCommentBox";

export default function CommentList() {
	const styles = {
		container: {
			display: "flex",
			flexFlow: "column",
			gap: "24px",
			padding: "32px",
			// maxWidth: "calc(0.6 * 1920px)",
			maxWidth: "736px",
			margin: "24px auto 0",
			backgroundColor: "#ffffff",
			boxShadow: "0 6px 20px 1px rgba(0, 0, 0, 0.12)",

			borderRadius: "25px",
		},
		textbtnShowMore: {
			color: "#a0a0a0",
			fontWeight: 700,
		},
	};
	return (
		<div style={styles.container}>
			<AddCommentBox author="OP" />

			<Comment
				author="Khanh Son"
				image="KS"
				content={`
					This is a false fact. Even when you enjoy it, sometimes it can get frustrating. Some people have
					trouble focusing. And it has nothing to do with "what they enjoy". Sometimes when programming
					stresses you out, you should take a break.
				`}
			/>

			<Comment
				author="Thien Bui"
				image="TB"
				content={`
					You still wanna make sure if you're unfocused by laziness or because you hate it
				`}
			/>

			<Comment
				author="Nam Quoc"
				image="NQ"
				content={`
					Thank you so much for sharing all this. I'm pretty sure that, I'll gain efficiency by following
					the promodoro technique. I used to stay watching videos and taking note for about 3h every
					night. And sometime, I wanted to give up because I felt like I was not really understanding, as
					if I was just keeping a written version of what I was watching.
				`}
			/>

			<Comment
				author="Le Huynh"
				image="LH"
				content={`
					This is honestly the beauty of the internet. 
					I'm sure people pay good money to take courses 
					that give you the same amount of information as this video. 
					But in this case, there's a great, clear teacher, 
					and you can pause and rewind as much as you need and its free! 
					I'm really enjoying it.
				`}
			/>

			<Comment
				author="Viet Dinh"
				image="VD"
				content={`
					I will absorb this knowledge!!!!
				`}
			/>

			<div style={styles.textbtnShowMore}>Show more comment&hellip;</div>
		</div>
	);
}
