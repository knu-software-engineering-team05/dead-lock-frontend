import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { Button } from '../../common/Button';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { PATHS } from '../../../router';
import { CommonWrapper } from '../../common/Wrapper';
import { RESULT_DETAIL_SEARCH_PARAMS } from '../../../constants/searchParams';
import Basic from './type/Basic';
import { DiagnosisResponse } from '../../../types/service';
import Helpful from './type/Helpful';
import { getDiagnosisItem } from '../../../service/diagnosis';
import { MOCK_RESULTS } from '../../../mock';

const ResultDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [diagnosisResult, setDiagnosisResult] = useState<DiagnosisResponse | null>(null);

  const handleLoadResultDetail = async () => {
    if (!id) {
      return;
    }

    // const { data } = await getDiagnosisItem(id);
    setDiagnosisResult(MOCK_RESULTS.find((diagnosisResult) => diagnosisResult.id.toString() === id) || MOCK_RESULTS[0]);
  };

  useEffect(() => {
    if (!searchParams.get('type')) {
      setSearchParams({ type: RESULT_DETAIL_SEARCH_PARAMS.BASIC });
    }

    handleLoadResultDetail();
  }, []);

  // diagnosisResult가 없을 경우 렌더링 하지 않음
  if (!diagnosisResult) {
    return null;
  }
  return (
    <ResultDetailWrapper>
      {searchParams.get('type') === RESULT_DETAIL_SEARCH_PARAMS.BASIC && (
        <Basic
          score={diagnosisResult.score}
          strokeProbability={diagnosisResult.strokeProbability}
          totalDiagnosis={diagnosisResult.totalDiagnosis}
        />
      )}
      {searchParams.get('type') === RESULT_DETAIL_SEARCH_PARAMS.HELPFUL && (
        <Helpful eatingHabits={diagnosisResult.eatingHabits} lifestyleHabits={diagnosisResult.lifestyleHabits} />
      )}

      <Button.Outlined onClick={() => navigate(PATHS.RESULT_LIST)} style={{ marginTop: '8px' }}>
        진단결과 목록으로 돌아가기
      </Button.Outlined>
    </ResultDetailWrapper>
  );
};

const ResultDetailWrapper = styled(CommonWrapper)`
  padding: 40px 32px;
`;

export default ResultDetail;
