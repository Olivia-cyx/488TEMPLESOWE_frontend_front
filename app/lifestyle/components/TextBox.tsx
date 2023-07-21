/* eslint-disable max-len */
interface TextProps {
  content: string
  textStyles: { [key: string]: string }
}

const TextBox: React.FC<TextProps> = ({ content, textStyles }) => {
  return (
    <div
      className=" md:w-[400px] md:h-[160px] w-[180px] h-[230px] p-6 absolute before:absolute before:w-10 before:h-10 before:content-[''] before:top-0 before:left-0 before:border-l-4 before:border-t-4 after:absolute after:w-10 after:h-10 after:content-[''] after:right-0 after:bottom-0 after:border-r-4 after:border-b-4 transition-all duration-500 ease-in-out textBoxRsponsive"
      style={{ ...textStyles }}
    >
      <p className="text-white md:text-lg text-sm">{content}</p>
    </div>
  )
}

export default TextBox
