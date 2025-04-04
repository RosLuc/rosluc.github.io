import './Portfolio.css'

function Portfolio() {

	return (
		<div className='container'>
			<img src="/perfil.jpg" alt="foto de perfil" />
			<div className='info'>
				<h1>Rosendo Lucas</h1>
				<h3>Um pouco sobre mim:</h3>
				<p>Sou formado em Tecnologia da Informação e Engenharia de Software e atuo como desenvolvedor Full Stack, sempre explorando novas tecnologias para criar soluções escaláveis e eficientes. Apaixonado por programação, encaro cada projeto como um novo desafio e uma oportunidade de aprendizado. Acredito que inovação e desenvolvimento andam lado a lado, e estou sempre em busca de novas formas de tornar a experiência digital mais dinâmica e impactante.</p>
				<div className='links'>
					<a className='github' href="https://github.com/RosLuc">GitHub</a>
					<a className='linkedin' href="https://www.linkedin.com/in/rosendo-lucas-24b044188/">Linkedin</a>
				</div>
			</div>
		</div>
	)
}

export default Portfolio
