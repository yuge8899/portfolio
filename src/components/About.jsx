import { Download } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        {/* 左侧内容 */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-4xl font-bold text-white mb-6">关于我</h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-8">
            我是一名热爱设计的 UI/UX 设计师，拥有5年的设计经验。我相信好的设计能够解决实际问题，让用户的生活更美好。在过去的项目中，我参与了多个大型项目的设计工作，帮助客户实现了业务目标。
          </p>
          <button className="btn-gradient px-6 py-3 rounded-lg font-semibold text-white flex items-center gap-2">
            <Download className="w-4 h-4" />
            下载简历
          </button>
        </div>

        {/* 右侧图片 */}
        <div className="flex-1 max-w-xl">
          <div className="card-glass rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1657757996603-acec063f1d9b?w=800"
              alt="Workspace"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About