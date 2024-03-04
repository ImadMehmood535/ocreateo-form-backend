const allFormDataDto = (data) => {
  const formData = data?.map((item) => ({
    name: item?.name,
    email: item?.email,
    satisfactionRating: item?.satisfactionRating,
    effectiveness: item?.effectiveness,
    relevance: item?.relevance,
    quality: item?.quality,
    analytics: item?.analytics,
    efficiency: item?.efficiency,
    strategy: item?.strategy,
    service: item?.service,
    specificContent: item?.specificContent,
    additionalData: item?.additionalData,
    competitors: item?.competitors,
    support: item?.support,
    message: item?.message,
  }));

  return {
    formData,
    totalCount: data?.length,
  };
};

module.exports = { allFormDataDto };
