import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, BookOpen, Target, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const certifications: any = {
  edutech: {
    id: "edutech",
    step: "1️⃣ 기초",
    title: "에듀테크활용지도사",
    subtitle: "(EdTech Utilization Instructor)",
    tagline: "'도구를 아는 사람'이 아니라 '교육 목적에 맞게 기술을 선택할 수 있는 사람'",
    description: "이 과정은 모든 스마택트 교육의 기초이자 출발점입니다.",
    icon: "🎯",
    color: "from-blue-500 to-blue-600",

    necessity: [
      "에듀테크 도구는 넘쳐나지만, 무엇을 써야 할지 모르는 현장",
      "기술이 수업을 방해하는 역설",
      "'AI는 좋은데, 수업엔 어떻게 쓰지?'라는 혼란",
    ],
    necessityTitle: "에듀테크활용지도사는",
    necessityConclusion: "기술 과잉의 시대에서 '선별과 판단'을 담당하는 교육자입니다.",

    perspectives: [
      "기술보다 교육 목적이 먼저",
      "유행보다 현장 적합성이 우선",
      "도구 사용법보다 수업 설계 능력 강화",
    ],

    contents: [
      "에듀테크와 AI 환경 이해",
      "교육 목적에 따른 도구 선택 기준",
      "수업 흐름에 맞는 에듀테크 활용 설계",
      "실제 교육 사례 분석 및 재구성",
    ],

    growth: [
      "새로운 도구 앞에서 흔들리지 않는 교육자",
      "'이건 우리 수업에 안 맞아요'라고 말할 수 있는 판단력",
      "에듀테크를 교육의 보조자로 활용하는 설계자",
    ],

    fields: [
      "평생교육·마을교육",
      "학교·기관 에듀테크 기초 과정",
      "강사 역량 강화 교육",
    ],
  },
  "digital-media": {
    id: "digital-media",
    step: "2️⃣ 비판",
    title: "디지털미디어교육",
    subtitle: "(Digital Media Literacy & Critical Media Education)",
    tagline: "'미디어를 만드는 기술'이 아니라 '미디어가 세상을 어떻게 재현하는지 읽는 힘'",
    description: "이 재현의 구조를 비판적으로 읽고, 다시 말할 수 있는 시민을 길러내는 교육입니다.",
    icon: "👁️",
    color: "from-purple-500 to-purple-600",

    necessity: [
      "오늘날 미디어는 현실을 단순히 반영하지 않습니다",
      "특정 집단을 과잉 재현하거나 지웁니다",
      "감정을 자극해 판단을 유도합니다",
      "AI 생성 콘텐츠로 '사실처럼 보이는 허구'를 만듭니다",
    ],
    necessityTitle: "디지털미디어교육은",
    necessityConclusion: "이 재현의 구조를 비판적으로 읽고, 다시 말할 수 있는 시민을 길러내는 교육입니다.",

    perspectives: [
      "미디어는 중립적이지 않다",
      "기술은 항상 권력과 연결된다",
      "비판은 거부가 아니라 이해에서 출발한다",
    ],

    competencies: [
      {
        title: "① 재현을 읽는 힘",
        items: [
          "이미지·영상·텍스트 속 관점 분석",
          "성별·세대·계층·기술에 대한 고정관념 읽기",
        ],
      },
      {
        title: "② 비판적으로 해석하는 힘",
        items: [
          "알고리즘·플랫폼 구조 이해",
          "AI 생성 콘텐츠의 편향과 한계 인식",
        ],
      },
      {
        title: "③ 다시 표현하는 힘",
        items: [
          "기존 메시지를 다른 관점으로 재구성",
          "영상·이미지·스토리로 대안적 서사 만들기",
        ],
      },
    ],

    contents: [
      "디지털 미디어와 사회현상",
      "AI·SNS 시대의 미디어 리터러시",
      "비판적 미디어 읽기 수업 설계",
      "표현과 제작을 통한 성찰 활동",
    ],

    growth: [
      "미디어를 무비판적으로 소비하지 않는 교육자",
      "윤리를 훈계하지 않고 질문으로 이끄는 지도자",
      "생각하고 표현하는 시민을 길러내는 사람",
    ],

    fields: [
      "학교·도서관 미디어 교육",
      "청소년·시니어 디지털 시민 교육",
      "공공 캠페인·지역 기록",
    ],
  },
  "metaverse-ethics": {
    id: "metaverse-ethics",
    step: "3️⃣ 체험",
    title: "메타버스·AI 윤리 체험지도사",
    subtitle: "(Metaverse & AI Ethics Experience Instructor)",
    tagline: "윤리를 '지식'이 아니라 체험과 선택의 문제로 다루는 교육자",
    description: "이 과정은 윤리를 '지식'이 아니라 체험과 선택의 문제로 다룹니다.",
    icon: "🌐",
    color: "from-indigo-500 to-indigo-600",

    necessity: [
      "딥페이크 범죄",
      "개인정보 침해",
      "AI 저작권 문제",
      "메타버스 속 책임 없는 행동",
    ],
    necessityTitle: "문제는 '몰라서'가 아니라",
    necessityConclusion: "체감하지 못해서 발생합니다.",

    perspectives: [
      "훈계형 윤리 교육 ❌",
      "체험 → 선택 → 성찰의 구조",
      "게임·스토리·메타버스 활용",
    ],

    contents: [
      "AI 윤리 핵심 이슈 이해",
      "메타버스·AR 체험 설계",
      "딥페이크·개인정보 시뮬레이션",
      "토론·성찰 중심 수업 구조",
    ],

    growth: [
      "윤리를 재미있게 가르칠 수 있는 교육자",
      "기술을 통제의 문제가 아닌 책임의 문제로 다루는 사람",
      "아동·청소년 눈높이에 맞춘 윤리 설계자",
    ],

    fields: [
      "학교 디지털 윤리 교육",
      "청소년·미디어 리터러시 프로그램",
      "AI·메타버스 체험 수업",
    ],
  },
  "smart-device": {
    id: "smart-device",
    step: "4️⃣ 생활",
    title: "스마트디바이스활용지도사",
    subtitle: "(Smart Device Utilization Instructor)",
    tagline: "기술을 가르치는 사람이 아니라 '곁에서 함께 해주는 사람'",
    description: "디지털 공포를 낮추고, 삶과 연결하는 교육자를 양성합니다.",
    icon: "📱",
    color: "from-green-500 to-green-600",

    necessity: [
      "디지털 격차는",
      "기기를 몰라서가 아니라",
      "실패 경험과 두려움 때문에 생깁니다",
    ],
    necessityTitle: "이 과정은",
    necessityConclusion: "디지털 공포를 낮추고, 삶과 연결하는 교육자를 양성합니다.",

    perspectives: [
      "속도보다 안심",
      "기능보다 생활",
      "설명보다 동행",
    ],

    contents: [
      "스마트폰 기본·심화 활용 지도",
      "시니어·중장년 디지털 공포 완화",
      "키오스크·생활 앱·AI 기능",
      "기종별 문제 해결 지도법",
    ],

    growth: [
      "'괜찮아요'라고 말해줄 수 있는 교육자",
      "디지털을 삶의 도구로 연결하는 사람",
      "지역사회 디지털 격차 완충자",
    ],

    fields: [
      "복지관·평생학습기관",
      "시니어 디지털 교육",
      "디지털 돌봄·생활 교육",
    ],
  },
  "ai-agent": {
    id: "ai-agent",
    step: "5️⃣ 설계",
    title: "AI 에이전트활용지도사",
    subtitle: "(AI Agent Utilization & System Design Instructor)",
    tagline: "AI를 잘 쓰는 사람이 아니라 AI와 사람 사이를 연결하는 '시스템 설계자'",
    description: "사람을 한 단계 끌어올리는 AI 중재자를 양성합니다.",
    icon: "🤖",
    color: "from-orange-500 to-orange-600",

    necessity: [
      "AI 격차는 기술의 문제가 아니라",
      "일의 구조를 모르는 격차",
      "'나는 못 해'라는 인식의 격차",
    ],
    necessityTitle: "이 과정은",
    necessityConclusion: "사람을 한 단계 끌어올리는 AI 중재자를 양성합니다.",

    roles: [
      {
        title: "핵심 역할 ① 시스템 설계자",
        items: [
          "업무 흐름 분석",
          "반복·비효율 지점 발견",
          "AI + 도구 자동화 구조 설계",
        ],
      },
      {
        title: "핵심 역할 ② AI 격차 완충자",
        items: [
          "두려움을 낮추는 언어 사용",
          "실패해도 괜찮은 실험 환경 설계",
          "AI를 '위협'이 아닌 '조력자'로 인식 전환",
        ],
      },
    ],

    contents: [
      "AI 에이전트 개념 이해",
      "교육·행정·기획 자동화 설계",
      "구글 워크스페이스 + AI 연계",
      "현장 맞춤 AI 활용 교육 설계",
    ],

    growth: [
      "AI를 설명하는 사람이 아니라 연결하는 사람",
      "조직과 개인의 일하는 방식을 바꾸는 설계자",
      "디지털 전환 현장의 조력자",
    ],

    fields: [
      "평생교육·공공기관",
      "교육·복지 현장 업무 자동화",
      "AI 리터러시·조직 컨설팅",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(certifications).map((id) => ({
    id: id,
  }));
}

export default function CertificationDetailPage({ params }: { params: { id: string } }) {
  const cert = certifications[params.id as keyof typeof certifications];

  if (!cert) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Link
            href="/certifications"
            className="inline-flex items-center text-sm text-gray-600 hover:text-teal-600"
          >
            ← 자격증 과정 목록으로
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className={`bg-gradient-to-r ${cert.color} text-white py-16 px-4`}>
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm mb-6">
            {cert.step}
          </span>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">{cert.icon}</span>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-2">{cert.title}</h1>
              <p className="text-white/80 text-sm">{cert.subtitle}</p>
            </div>
          </div>
          <p className="text-xl font-medium bg-white/10 rounded-xl p-4">
            {cert.tagline}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Description */}
          <p className="text-lg text-gray-700 leading-relaxed">{cert.description}</p>

          {/* Social Necessity */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">사회적 필요성</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <ul className="space-y-3 mb-6">
                  {cert.necessity.map((item: string, idx: number) => (
                    <li key={idx} className="text-gray-700 flex items-start gap-3">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-semibold text-gray-900">
                  {cert.necessityTitle}
                </p>
                <p className="text-lg text-teal-700 font-medium">
                  {cert.necessityConclusion}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Perspectives or Roles */}
          {cert.perspectives && (
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">핵심 교육 관점</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {cert.perspectives.map((perspective: string, idx: number) => (
                    <div key={idx} className="bg-teal-50 rounded-lg p-4">
                      <p className="text-gray-800 font-medium">{perspective}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {cert.roles && (
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">핵심 역할</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {cert.roles.map((role: any, idx: number) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-semibold text-gray-900 mb-3">{role.title}</h3>
                      <ul className="space-y-2">
                        {role.items.map((item: string, i: number) => (
                          <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                            <span className="text-teal-500 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {cert.competencies && (
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">핵심 역량 구성</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {cert.competencies.map((competency: any, idx: number) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-semibold text-gray-900 mb-3">{competency.title}</h3>
                      <ul className="space-y-2">
                        {competency.items.map((item: string, i: number) => (
                          <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                            <span className="text-teal-500 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Contents */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-teal-600" />
                주요 학습 내용
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {cert.contents.map((content: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-lg">
                    <span className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-gray-700">{content}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Growth */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-teal-600" />
                수료 후 성장 모습
              </h2>
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6">
                <ul className="space-y-4">
                  {cert.growth.map((item: string, idx: number) => (
                    <li key={idx} className="text-gray-700 flex items-start gap-3">
                      <span className="text-teal-600 text-xl">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Fields */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Target className="w-6 h-6 text-teal-600" />
                활용 분야
              </h2>
              <div className="flex flex-wrap gap-3">
                {cert.fields.map((field: string, idx: number) => (
                  <span key={idx} className="bg-gray-100 text-gray-800 px-5 py-3 rounded-full text-base">
                    {field}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {cert.title} 과정에 참여해보세요
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            사람 중심의 디지털 교육자로 성장할 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
              <Link href="/contact">
                수강 문의하기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/certifications">
                다른 과정 보기
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
