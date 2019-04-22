import React, { Component } from 'react';
import ContentTitle from './contentTitle';

import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const History = () => {
  return (
    <>
      {ContentTitle('History', 'id-card', '#0066FF')}
      <div className="sub-content-body">
        <Timeline lineColor={'#ddd'}>
          <TimelineItem
            key="001"
            dateText="2019/5 ~ 現在"
            style={{ color: '#e86971' }}
          >
            <h3>株式会社pring</h3>
            <h4>大手SIerを退職しスタートアップへ</h4>
            <p>
              「シビアな環境で自分を磨きたい」、「エンジニアとして開発に没頭したい」と思い、スタートアップに転職しました。
            </p>
            <p>
              株式会社pringとは、メタップスグループで送受金/キャッシュレス決済サービスの「pring」を開発している会社です。
              ただ決済を便利にするだけではなく、お金のやり取りにコミュニケーションを添えて、より豊かなお金コミュニケーションを実現します。
            </p>
            <p>
              ビジョンへの共感、将来性、社員の方々の人柄や雰囲気などが私にとって魅力的でした。本気でコミットして、ジュニアエンジニアはもう卒業します。
            </p>
          </TimelineItem>
          <TimelineItem
            key="002"
            dateText="2018/4 ~ 2019/5"
            dateInnerStyle={{ background: '#666' }}
          >
            <h3>NTTコムウェア株式会社</h3>
            <h4>大学を卒業し、NTTグループでビジネス開発を担当</h4>
            <p>
              NTTグループの情報システムを担当する会社で、新規ビジネス開発を担当しました。
            </p>
            <p>
              ドローン, 自動運転, MR(Mixed Reality)を活用したビジネスの、企画、開発、営業、PoCなどに従事しました。
            </p>
            <p>
              4ヶ月間のOJT研修では、チームリーダーとしてウォーターフォールプロジェクトの開発とマネジメントを経験しました。
            </p>
          </TimelineItem>
          <TimelineItem
            key="003"
            dateText="2015/5 ~ 2018/3"
            dateInnerStyle={{ background: '#666' }}
          >
            <h3>株式会社IPパートナーズ</h3>
            <h4>ベンチャー企業で3年弱インターン</h4>
            <p>
              コンサルティングやアウトソーシングがメイン事業のベンチャー企業で3年弱インターンをしました。
            </p>
            <p>
              サービス運用がメインの業務でしたが、業務改善や営業、検証など、幅広い業務を担当していました。
            </p>
            <p>
              特に、採用は中心的に取り組み、採用フローの確立から、人材サービスへの求人票の掲載、面接、選考まで、横断的に担当しました。
            </p>
          </TimelineItem>
        </Timeline>
      </div>
    </>
  );
}

export default History;