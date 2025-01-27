import CouponIcon from "@/ui/icon/coupon";
import { listItem } from "@/utils/data";
import Link from "next/link";

// after: 쿠폰은 따로 이미지 파일로 빼서 구성할 것임

const ButtonBox = () => {
  return (
    <ul className="flex items-center gap-6">
      {listItem.map(({ name, src }) => {
        if (name === "CUOPON") {
          return (
            <li key={name} className="scale-auto">
              <Link href={src}>
                <CouponIcon />
              </Link>
            </li>
          );
        }
        return (
          <li key={name} className="text-sm hover-effect">
            <Link href={src}>{name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ButtonBox;

/***
 * 시멘틱 tag의 활용으로 SEO를 높이는 방법 -ChatGPT 답변임
 * navbar의 item을 나열할 때에는 ul과 li tag를 이용하는 것이 시멘틱 관점에서는 더 좋다
 * 그렇다면 link tag는 자연스럽게 li tag의 children 요소로 들어가는 것이 가장 적합하다는 평이 나왔다
 * div와 link tag를 이용하는 경우에는 목록 구성하는 경우가 아닌 경우가 더 적합하다고 한다.
 *
 */
