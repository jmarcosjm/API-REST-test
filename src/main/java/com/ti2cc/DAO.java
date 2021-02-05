package com.ti2cc;

import java.sql.*;

public class DAO {
	private Connection conexao;
	
	public DAO() {
		conexao = null;
	}
	
	public boolean conectar() {
		String driverName = "org.postgresql.Driver";                    
		String serverName = "localhost";
		String mydatabase = "postgres";
		int porta = 5432;
		String url = "jdbc:postgresql://" + serverName + ":" + porta +"/" + mydatabase;
		String username = "ti2cc";
		String password = "ti@cc";
		boolean status = false;

		try {
			Class.forName(driverName);
			conexao = DriverManager.getConnection(url, username, password);
			status = (conexao == null);
			System.out.println("Conexão efetuada com o postgres!");
		} catch (ClassNotFoundException e) { 
			System.err.println("Conexão NÃO efetuada com o postgres -- Driver não encontrado -- " + e.getMessage());
		} catch (SQLException e) {
			System.err.println("Conexão NÃO efetuada com o postgres -- " + e.getMessage());
		}

		return status;
	}
	
	public boolean close() {
		boolean status = false;
		
		try {
			conexao.close();
			status = true;
		} catch (SQLException e) {
			System.err.println(e.getMessage());
		}
		return status;
	}
	
	public boolean inserirCandidato(CandidateParent candidato) {
		boolean status = false;
		try {  
			Statement st = conexao.createStatement();
			String sql = "INSERT INTO candidate_parents (primeiro_nome, sobrenome, cpf, estado_civil, data_nascimento, sexo, renda) VALUES ('" + candidato.getPrimeiro_nome() + "', '"  
				       + candidato.getSobrenome() + "', '" + candidato.getCPF() + "', '" + candidato.getEstado_civil() + "', '" + candidato.getData_nascimento()
				       + "', '" + candidato.getSexo() + "', '" + candidato.getRenda() + "');";
			System.out.println(sql);
			st.executeUpdate(sql);
			st.close();
			status = true;
		} catch (SQLException u) {  
			throw new RuntimeException(u);
		}
		return status;
	}
	
	public boolean atualizarCandidato(CandidateParent candidato) {
		boolean status = false;
		try {  
			Statement st = conexao.createStatement();
			String sql = "UPDATE candidate_parents SET primeiro_nome = '" + candidato.getPrimeiro_nome() + "', sobrenome = '"  
				       + candidato.getSobrenome() + "', cpf = '" + candidato.getCPF() + "', estado_civil = '" + candidato.getEstado_civil() + "', data_nascimento = '" + candidato.getData_nascimento()
				       + "', sexo = '" + candidato.getSexo() + "', renda = '" + candidato.getRenda() + "'"
					   + " WHERE cpf = '" + candidato.getCPF() +"';";
			st.executeUpdate(sql);
			st.close();
			status = true;
		} catch (SQLException u) {  
			throw new RuntimeException(u);
		}
		return status;
	}
	
	public boolean excluirCandidato(String CPF) {
		boolean status = false;
		try {  
	
				Statement st = conexao.createStatement();
				st.executeUpdate("DELETE FROM candidate_parents WHERE cpf = '" + CPF + "';");
				st.close();
				status = true;
			
		} catch (SQLException u) {  
			throw new RuntimeException(u);
		}
		return status;
	}
	
	public CandidateParent getCandidato(String CPF) {
		CandidateParent candidato = null;
		try {
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
			ResultSet rs = st.executeQuery("SELECT * FROM candidate_parents WHERE cpf = '" + CPF + "';");		
	         if(rs.next()){
	                candidato = new CandidateParent(rs.getString("primeiro_nome"), rs.getString("sobrenome"), rs.getString("CPF"), rs.getString("estado_civil"),rs.getString("data_nascimento"), rs.getString("sexo"), rs.getString("renda"));
	          }
	          st.close();
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return candidato;
	}
	
	public CandidateParent[] getCandidatos() {
		CandidateParent[] candidatos = null;
		
		try {
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
			ResultSet rs = st.executeQuery("SELECT * FROM candidate_parents");		
	         if(rs.next()){
	             rs.last();
	             candidatos = new CandidateParent[rs.getRow()];
	             rs.beforeFirst();

	             for(int i = 0; rs.next(); i++) {
	                candidatos[i] = new CandidateParent(rs.getString("primeiro_nome"), rs.getString("sobrenome"), rs.getString("CPF"), rs.getString("estado_civil"),rs.getString("data_nascimento"), rs.getString("sexo"), rs.getString("renda"));
	             }
	          }
	          st.close();
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return candidatos;
	}

	
	public CandidateParent[] getCandidatosMasculinos() {
		CandidateParent[] candidatos = null;
		
		try {
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
			ResultSet rs = st.executeQuery("SELECT * FROM candidate_parents WHERE candidato.sexo LIKE 'M'");		
	         if(rs.next()){
	             rs.last();
	             candidatos = new CandidateParent[rs.getRow()];
	             rs.beforeFirst();

	             for(int i = 0; rs.next(); i++) {
	            	 candidatos[i] = new CandidateParent(rs.getString("primeiro_nome"), rs.getString("sobrenome"), rs.getString("CPF"), rs.getString("estado_civil"),rs.getString("data_nascimento"), rs.getString("sexo"), rs.getString("renda"));
	             }
	          }
	          st.close();
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return candidatos;
	}
}


/*
-- Table: public.candidate_parents

-- DROP TABLE public.candidate_parents;

CREATE TABLE public.candidate_parents
(
    primeiro_nome "char"[] NOT NULL,
    sobrenome "char"[] NOT NULL,
    cpf "char"[] NOT NULL,
    estado_civil "char"[] NOT NULL,
    data_nascimento "char"[] NOT NULL,
    sexo "char"[] NOT NULL,
    renda "char"[],
    CONSTRAINT "CandidateParents_pkey" PRIMARY KEY (cpf)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.candidate_parents
    OWNER to ti2cc;
*/