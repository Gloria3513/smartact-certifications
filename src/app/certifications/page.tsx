import Link from "next/link";
import { ArrowRight, Users, Target, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    id: "ai-agent",
    title: "AI 에이전트 활용지도사",
    subtitle: "AI를 '도구'가 아닌 업무 파트너로 설계하는 교육자",
    icon: "🤖",
    color: "bg-blue-500",
    targets: [
      "강의·행정·기획 업무가 과중한 강사",
      "AI를 써야 하는 건 알지만 막막한 분",
      "자동화·효율화를 교육으로 풀고 싶은 분",
    ],
    contents: [
      "AI 에이전트 개념 이해",
      "강의 준비·운영 자동화 구조 설계",
      "구글 워크스페이스 + AI 연동",
      "현장 맞춤 AI 활용 지도법",
    ],
    activities: [
      "평생교육 강사",
      "복지·교육기관 실무자",
      "1인 기업·교육 기획자",
    ],
  },
  {
    id: "smart-device",
    title: "스마트디바이스 활용지도사",
    subtitle: "디지털을 '가르치는 사람'이 아니라 '곁에서 도와주는 사람'",
    icon: "📱",
    color: "bg-green-500",
    targets: [
      "시니어·중장년 교육에 관심 있는 분",
      "스마트폰 수업을 진행하고 싶은 강사",
      "디지털 돌봄·생활 교육을 하고 싶은 분",
    ],
    contents: [
      "스마트폰 기본·심화 지도법",
      "시니어 디지털 공포 완화 전략",
      "키오스크·생활 앱·AI 기능 활용",
      "기종별 문제 해결 실습",
    ],
    activities: [
      "복지관·주민자치",
      "시니어 교육 현장",
      "디지털 동행·돌봄 영역",
    ],
  },
  {
    id: "metaverse-ethics",
    title: "메타버스·AI 윤리 체험지도사",
    subtitle: "윤리를 '설명'하지 않고 '경험하게 만드는' 지도자",
    icon: "🌐",
    color: "bg-purple-500",
    targets: [
      "아동·청소년 대상 수업을 하는 분",
      "AI 윤리를 재미있게 가르치고 싶은 분",
      "메타버스·AR 수업을 설계하고 싶은 분",
    ],
    contents: [
      "AI 윤리 핵심 이슈 이해",
      "딥페이크·개인정보·저작권 사례",
      "AR·게임·스토리 기반 체험 수업 설계",
      "토론·성찰형 수업 구조",
    ],
    activities: [
      "학교·도서관",
      "청소년 기관",
      "디지털 시민 교육",
    ],
  },
  {
    id: "video-autobiography",
    title: "AI 영상자서전 지도사",
    subtitle: "기술로 삶을 기록하는 스토리 동반자",
    icon: "🎬",
    color: "bg-orange-500",
    targets: [
      "시니어·중장년 교육을 하는 분",
      "기록·회상·자존감 회복 프로그램에 관심 있는 분",
      "영상·AI를 사람 중심으로 쓰고 싶은 분",
    ],
    contents: [
      "생애 스토리 인터뷰 설계",
      "AI 이미지·영상 도구 활용",
      "영상 자서전 제작 실습",
      "기록 기반 교육 운영법",
    ],
    activities: [
      "시니어 교육",
      "마을 기록 사업",
      "치유·회복 프로그램",
    ],
  },
  {
    id: "design-platform",
    title: "디자인 플랫폼 활용전문가",
    subtitle: "디자인을 '전문가의 영역'에서 '모두의 도구'로",
    icon: "🎨",
    color: "bg-pink-500",
    targets: [
      "강의 자료·홍보물 제작이 필요한 분",
      "Canva를 교육에 활용하고 싶은 분",
      "비전공자 대상 콘텐츠 교육을 하고 싶은 분",
    ],
    contents: [
      "Canva 핵심 기능 이해",
      "AI 디자인 기능 활용",
      "영상·SNS 콘텐츠 제작",
      "교육용 템플릿 제작",
    ],
    activities: [
      "강사·1인 기업",
      "마을 홍보·교육",
      "디지털 크리에이터",
    ],
  },
];

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            자격증 과정
          </h1>
          <p className="text-xl text-teal-100">
            현장에서 바로 쓰이는 실전형 자격증
          </p>
        </div>
      </section>

      {/* Certifications List */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {certifications.map((cert) => (
            <Card key={cert.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <CardHeader className={`${cert.color} text-white`}>
                <div className="flex items-center gap-4">
                  <span className="text-5xl">{cert.icon}</span>
                  <div>
                    <CardTitle className="text-2xl md:text-3xl">{cert.title}</CardTitle>
                    <CardDescription className="text-white/90 mt-2">
                      {cert.subtitle}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* 이런 분께 추천합니다 */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-5 h-5 text-teal-600" />
                      <h3 className="font-semibold text-gray-900">이런 분께 추천합니다</h3>
                    </div>
                    <ul className="space-y-2">
                      {cert.targets.map((target, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-teal-500 mt-1">•</span>
                          <span>{target}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 배우는 핵심 내용 */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-5 h-5 text-teal-600" />
                      <h3 className="font-semibold text-gray-900">배우는 핵심 내용</h3>
                    </div>
                    <ul className="space-y-2">
                      {cert.contents.map((content, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-teal-500 mt-1">•</span>
                          <span>{content}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 활동 분야 */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap className="w-5 h-5 text-teal-600" />
                      <h3 className="font-semibold text-gray-900">활동 분야</h3>
                    </div>
                    <ul className="space-y-2">
                      {cert.activities.map((activity, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-teal-500 mt-1">•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            어떤 자격증부터 시작하시겠습니까?
          </h2>
          <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
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
