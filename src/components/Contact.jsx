import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* 标题 */}
        <h2 className="text-4xl font-bold gradient-text mb-4">联系我</h2>
        <p className="text-text-secondary mb-12">有项目想法？欢迎随时联系我</p>

        {/* 联系信息 */}
        <div className="flex flex-col items-center gap-6 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <span className="text-white">hello@example.com</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <span className="text-white">北京，中国</span>
          </div>
        </div>

        {/* 社交链接 */}
        <div className="flex items-center justify-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="w-12 h-12 card-glass rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 text-white" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact