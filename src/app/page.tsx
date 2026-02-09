import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const certifications = [
  {
    id: "edutech",
    title: "에듀테크활용지도사",
    description: "기술 과잉의 시대에서 '선별과 판단'을 담당하는 교육자",
    subtitle: "도구를 아는 사람이 아니라 교육 목적에 맞게 기술을 선택할 수 있는 사람",
    icon: "🎯",
  },
  {
    id: "digital-media",
    title: "디지털미디어교육",
    description: "미디어가 세상을 어떻게 재현하는지 읽는 힘을 기르는 교육",
    subtitle: "미디어를 만드는 기술이 아니라 비판적으로 읽는 시민을 길러내는 교육",
    icon: "👁️",
  },
  {
    id: "metaverse-ethics",
    title: "메타버스·AI 윤리 체험지도사",
    description: "윤리를 '지식'이 아니라 체험과 선택의 문제로 다루는 교육자",
    subtitle: "훈계형 윤리 교육이 아닌 체험 → 선택 → 성찰의 구조",
    icon: "🌐",
  },
  {
    id: "smart-device",
    title: "스마트디바이스활용지도사",
    description: "기술을 가르치는 사람이 아니라 '곁에서 함께 해주는 사람'",
    subtitle: "디지털 공포를 낮추고, 삶과 연결하는 교육자",
    icon: "📱",
  },
  {
    id: "ai-agent",
    title: "AI 에이전트활용지도사",
    description: "AI를 잘 쓰는 사람이 아니라 AI와 사람 사이를 연결하는 시스템 설계자",
    subtitle: "사람을 한 단계 끌어올리는 AI 중재자",
    icon: "🤖",
  },
];

const coreMessages = [
  {
    title: "기술을 따라잡는 교육이 아니라",
    description: "사람이 기술 속에서 길을 잃지 않도록 돕는 교육입니다.",
  },
  {
    title: "더 많은 기술보다",
    description: "이해·비판·설계·중재할 수 있는 교육자가 필요합니다.",
  },
  {
    title: "단계적 구조로 이어지는 교육 체계",
    description: "기초 → 비판 → 체험 → 생활 → 설계",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Declaration Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-semibold tracking-widest text-teal-400 mb-4">
            스마택트 교육 체계 선언문
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            스마택트의 교육 과정은
            <br />
            기술을 따라잡는 교육이 아니라,
            <br />
            <strong className="text-white">사람이 기술 속에서 길을 잃지 않도록 돕는 교육</strong>입니다.
          </p>
        </div>
      </section>

      {/* Main Hero */}
      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            스마택트 교육·자격 과정 5종
          </h1>
          <p className="text-xl md:text-2xl text-teal-100 mb-4">
            사람을 중심에 둔 디지털 전환 교육 체계
          </p>
        </div>
      </section>

      {/* Why Message */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            디지털 전환, AI 확산, 미디어 환경 변화 속에서
            <br />
            우리는 더 많은 기술보다
            <br />
            <strong className="text-teal-700 text-xl">이해·비판·설계·중재할 수 있는 교육자</strong>가 필요하다고 믿습니다.
          </p>
          <div className="bg-teal-50 rounded-2xl p-8">
            <p className="text-gray-700 leading-relaxed">
              스마택트의 5가지 과정은
              <br />
              <strong className="text-teal-700">기초 → 비판 → 체험 → 생활 → 설계</strong>로 이어지는
              <br />
              사람 중심 디지털 교육의 단계적 구조입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Core Messages */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            왜 스마택트 교육인가요?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreMessages.map((msg, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{idx + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {msg.title}
                </h3>
                <p className="text-gray-600 text-sm">{msg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              자격증 5종
            </h2>
            <p className="text-lg text-gray-600">
              현장에서 바로 쓰이는 실전형 자격증을 만나보세요
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-teal-600">
                <CardHeader>
                  <div className="text-4xl mb-2">{cert.icon}</div>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                  <CardDescription className="text-sm">{cert.description}</CardDescription>
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
            사람 중심의 디지털 교육자가 되어보세요
          </h2>
          <Button asChild size="lg" className="mt-8 bg-yellow-400 text-gray-900 hover:bg-yellow-300">
            <Link href="/contact">
              수강 문의하기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
