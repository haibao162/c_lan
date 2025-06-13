import pandas as pd

df = pd.read_excel("result.xlsx")
print(df)
print('----')

print(df.iloc[0:1])
new_row = {
    'model_type': 'yjx',
    'learning_rate': 'yjx',
    'hidden_size': 'yjx',
    'batch_size': 'yjx',
    'pooling_style': 'yjx',
    'acc': 'yjx'
}
df = df._append(new_row, ignore_index=True)
df.to_excel('result.xlsx', index=False)