import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const certifications = [
  {
    id: "ai-agent",
    title: "AI 에이전트 활용지도사",
    description: "AI를 '도구'가 아닌 업무 파트너로 설계하는 교육자",
    icon: "🤖",
  },
  {
    id: "smart-device",
    title: "스마트디바이스 활용지도사",
    description: "디지털을 '가르치는 사람'이 아니라 '곁에서 도와주는 사람'",
    icon: "📱",
  },
  {
    id: "metaverse-ethics",
    title: "메타버스·AI 윤리 체험지도사",
    description: "윤리를 '설명'하지 않고 '경험하게 만드는' 지도자",
    icon: "🌐",
  },
  {
    id: "video-autobiography",
    title: "AI 영상자서전 지도사",
    description: "기술로 삶을 기록하는 스토리 동반자",
    icon: "🎬",
  },
  {
    id: "design-platform",
    title: "디자인 플랫폼 활용전문가",
    description: "디자인을 '전문가의 영역'에서 '모두의 도구'로",
    icon: "🎨",
  },
];

const coreMessages = [
  {
    title: "기술은 빠르게 변하지만, 사람을 이해하는 교육은 남습니다",
    description: "AI와 디지털 기술은 계속 진화하지만, 사람의 마음을 이해하고 함께 성장하는 교육의 가치는 변하지 않습니다.",
  },
  {
    title: "스마택트는 디지털 격차·윤리·기록·창작을 연결합니다",
    description: "단순한 기술 전수를 넘어, 디지털 격차 해소와 윤리적 사용, 삶의 기록, 창의적 활용을 모두 연결합니다.",
  },
  {
    title: "자격증 취득 이후까지 이어지는 실전형 교육 생태계",
    description: "자격증 취득이 끝이 아닙니다. 실제 현장에서 활동할 수 있는 지원과 네트워크가 계속됩니다.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            디지털을 가르치는 자격증이 아닙니다.
            <br />
            <span className="text-yellow-300">사람의 삶을 바꾸는 교육자</span>를 만드는 자격증입니다.
          </h1>
          <p className="text-lg md:text-xl text-teal-100 leading-relaxed max-w-3xl mx-auto">
            스마택트 민간자격증은
            <br />
            AI·디지털 기술을 <strong>'잘 쓰는 사람'</strong>이 아니라
            <br />
            현장에서 사람을 돕는 <strong>교육자·활동가</strong>를 양성합니다.
          </p>
        </div>
      </section>

      {/* Core Messages */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              왜 스마택트 자격증인가요?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {coreMessages.map((msg, idx) => (
              <div key={idx} className="text-center p-6">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-700">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {msg.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {msg.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Preview */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              스마택트 자격증 5종
            </h2>
            <p className="text-lg text-gray-600">
              현장에서 바로 쓰이는 실전형 자격증을 만나보세요
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-2">{cert.icon}</div>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                  <CardDescription>{cert.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
              <Link href="/certifications">
                자격증 전체 보기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            "자격증이 목적이 아니라
            <br />
            현장에서 쓰이는 <span className="text-yellow-300">'역할'</span>을 만들고 싶다면"
          </h2>
          <Button asChild size="lg" className="mt-8 bg-yellow-400 text-gray-900 hover:bg-yellow-300">
            <Link href="/process">
              수강 안내 보기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
