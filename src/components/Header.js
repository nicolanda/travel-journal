import planetIcon from '../images_src/planet_icon.png'

export const Header = () => {
  return(
    <section className='header--section'>
      <img src={planetIcon} alt='planet_icon' className='header--icon'></img>
      <h4 className='header--title'>
        my travel journal
      </h4>
    </section>
  )
}