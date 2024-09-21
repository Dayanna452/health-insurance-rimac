
import './styles/image.scss'
interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string
}

export const Image = ({ className, ...props }: ImageProps) => {
  return (
    <img
      className={`${className ? className : ''} image-container`}
      {...props}
    />
  )
}
