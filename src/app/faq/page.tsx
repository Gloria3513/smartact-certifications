import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    q: "비전공자도 가능한가요?",
    a: "네, 모든 과정은 비전공자 기준으로 설계되어 있습니다. 디지털 기술에 익숙하지 않더라도 천천히, 확실하게 배울 수 있도록 구성되어 있습니다.",
  },
  {
    q: "자격증 취득 후 활동 지원이 있나요?",
    a: "네, 스마택트 교육·프로젝트 연계 기회가 제공됩니다. 자격증 취득 후에도 지속적인 네트워크와 활동 기회를 지원합니다.",
  },
  {
    q: "민간자격증인가요?",
    a: "네, 스마택트에서 운영하는 민간자격증입니다. 국가 공인 자격증은 아니지만, 현장에서의 실무 역량을 증명하는 자격으로 활용할 수 있습니다.",
  },
  {
    q: "교육 기간은 얼마나 걸리나요?",
    a: "각 자격증 과정마다 다르지만, 일반적으로 4~8주 정도의 교육 기간이 필요합니다. 온라인/오프라인, 집중과정/정규과정 등 다양한 옵션이 있습니다.",
  },
  {
    q: "교육비는 얼마인가요?",
    a: "각 과정마다 교육비가 다릅니다. 단체 교육, 맞춤형 과정 등 경우에 따라 다르게 적용됩니다. 자세한 내용은 문의하기를 통해 확인해 주세요.",
  },
  {
    q: "여러 자격증을 동시에 신청할 수 있나요?",
    a: "가능합니다. 다만, 각 과정의 특성과 개인의 학습 속도를 고려하여 상담을 통해 추천해 드립니다.",
  },
  {
    q: "원격 교육도 가능한가요?",
    a: "네, 온라인 실시간 강의와 녹화 강의를 제공합니다. 지역에 상관없이 참여 가능합니다.",
  },
  {
    q: "미디어 간행물에 자격증을 표기할 수 있나요?",
    a: "네, 스마택트 자격증 취득 후 이력서, 포트폴리오, 소개서 등에 자격증을 표기할 수 있습니다.",
  },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            자주 묻는 질문
          </h1>
          <p className="text-xl text-teal-100">
            궁금한 점을 빠르게 확인하세요
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <Card key={idx}>
              <CardContent className="pt-6">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      Q. {faq.q}
                    </h3>
                    <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    A. {faq.a}
                  </p>
                </details>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            더 궁금한 점이 있으신가요?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            언제든지 문의해 주시면 친절하게 안내해 드리겠습니다.
          </p>
          <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
            <Link href="/contact">
              문의하기
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
